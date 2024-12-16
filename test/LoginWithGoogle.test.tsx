import '@testing-library/jest-dom'
import {it, expect, describe, vi} from "vitest";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import LoginWithGoogle from "@/app/(auth)/LoginWithGoogle";
import useAuth from "@/app/utils/hooks/useAuth";
import {signInWithPopup} from "firebase/auth";

vi.mock('firebase/auth', () => {
    const mockProvider = {};
    return {
        GoogleAuthProvider: vi.fn(() => mockProvider),
        signInWithPopup: vi.fn(),
        getAuth: vi.fn().mockReturnValue({}),
    };
});

vi.mock('@/app/utils/hooks/useAuth', () => ({
    __esModule: true,
    default: vi.fn(),
}));

vi.mock('next/navigation', () => ({
    useRouter() {
        return {
            push: vi.fn(),
            prefetch: () => null,
        };
    },
}));

describe('LoginWithGoogle', () => {
    const mockUseAuth = useAuth as jest.Mock;

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render the button', () => {
        mockUseAuth.mockReturnValue({ user: null, checking: false });

        render(<LoginWithGoogle />);

        const button = screen.getByRole('button', { name: /Sign in with Google/i });
        expect(button).toBeInTheDocument();
    });

    it('should call signInWithPopup when button is clicked', async () => {
        mockUseAuth.mockReturnValue({ user: null });

        render(<LoginWithGoogle />);

        const button = screen.getByRole('button', { name: /Sign in with Google/i });
        fireEvent.click(button);

        await waitFor(() => {
            expect(signInWithPopup).toHaveBeenCalled();
            expect(signInWithPopup).toHaveBeenCalledWith(expect.any(Object), expect.any(Object));
        });
    });

    it('should log an error when sign in fails', async () => {
        const consoleErrorMock = vi.spyOn(console, 'error')
            .mockImplementation(() => {});
        mockUseAuth.mockReturnValue({ user: null });
        (signInWithPopup as jest.Mock).mockRejectedValueOnce(new Error('Test error'));

        render(<LoginWithGoogle />);

        const button = screen.getByRole('button', { name: /Sign in with Google/i });
        fireEvent.click(button);

        await waitFor(() => {
            expect(consoleErrorMock).toHaveBeenCalledWith("Error signing in with Google:", expect.any(Error));
        });
        consoleErrorMock.mockRestore();
    });
});
import { renderHook } from '@testing-library/react';
import { User } from 'firebase/auth';
import { vi } from 'vitest';
import useAuth from '@/app/utils/hooks/useAuth';
import { waitFor } from '@testing-library/react';
import { Auth } from "firebase/auth";

const mockOnAuthStateChanged = vi.fn();

vi.mock('firebase/auth', () => ({
    onAuthStateChanged: (auth: Auth, observer: (user: User | null) => void) => mockOnAuthStateChanged(auth, observer),
    getAuth: vi.fn(() => ({})),
    auth: {},
}));

describe('useAuth', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should set user on auth state change', async () => {
        const mockUser: User = { uid: '26104a55-89d3-453f-85b9-8304c30c7b81', email: 'test@example.com' } as User;
        mockOnAuthStateChanged.mockImplementation((_, callback) => {
            callback(mockUser);
            return () => {};
        });

        const { result } = renderHook(() => useAuth());

        await waitFor(() => {
            expect(result.current.user).toEqual(mockUser);
            expect(result.current.checking).toBe(false);
        });
    });

    it('should handle no user state', async () => {
        mockOnAuthStateChanged.mockImplementation((_, callback) => {
            callback(null);
            return () => {};
        });

        const { result } = renderHook(() => useAuth());

        await waitFor(() => {
            expect(result.current.user).toBe(null);
            expect(result.current.checking).toBe(false);
        });
    });
});
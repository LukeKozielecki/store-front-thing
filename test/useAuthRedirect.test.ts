import { renderHook } from "@testing-library/react";
import {usePathname, useRouter} from 'next/navigation';
import { User } from 'firebase/auth';
import useAuthRedirect from "@/app/utils/hooks/useAuthRedirect";
import { vi } from "vitest";

vi.mock('next/navigation', () => ({
    useRouter: vi.fn(),
    usePathname: vi.fn(),
}));

describe('useAuthRedirect', () => {
    const mockPush = vi.fn();

    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({
            push: mockPush,
        });
        (usePathname as jest.Mock).mockReturnValue('/some-path');

        vi.clearAllMocks();
    });

    it('should redirect to the login page if user is null and not on /login', () => {
        const checking = false;
        const user = null;

        renderHook(() => useAuthRedirect(checking, user));

        expect(mockPush).toHaveBeenCalledWith('/login');
    });

    it('should not redirect if user is null but on /login', () => {
        const checking = false;
        const user = null;
        (usePathname as jest.Mock).mockReturnValue('/login');

        renderHook(() => useAuthRedirect(checking, user));

        expect(mockPush).not.toHaveBeenCalled();
    });

    it('should not redirect if user is present', () => {
        const checking = false;
        const user: User = { uid: '26104a55-89d3-453f-85b9-8304c30c7b81' } as User;

        renderHook(() => useAuthRedirect(checking, user));

        expect(mockPush).not.toHaveBeenCalled();
    });

    it('should not redirect when checking is true', () => {
        const checking = true;
        const user = null;

        renderHook(() => useAuthRedirect(checking, user));

        expect(mockPush).not.toHaveBeenCalled();
    });
});
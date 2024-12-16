import { renderHook } from "@testing-library/react";
import { useRouter } from 'next/navigation';
import { User } from 'firebase/auth';
import useRedirectTo from "@/app/utils/hooks/useRedirectTo";
import {vi} from "vitest";

vi.mock('next/navigation', () => ({
    useRouter: vi.fn(),
}));

describe('useRedirectTo', () => {
    const mockPush = vi.fn();

    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({
            push: mockPush,
        });
        vi.clearAllMocks()
    });

    it('should redirect to the specified route when user is present', () => {
        const user: User = { uid: '26104a55-89d3-453f-85b9-8304c30c7b81' } as User;
        const route = '/dashboard';

        renderHook(() => useRedirectTo(user, route));

        expect(mockPush).toHaveBeenCalledWith(route);
    });

    it('should not redirect if user is null', () => {
        renderHook(() => useRedirectTo(null));

        expect(mockPush).not.toHaveBeenCalled();
    });

    it('should redirect to the default route if no route argument is provided', () => {
        const user: User = { uid: '26104a55-89d3-453f-85b9-8304c30c7b81' } as User;

        renderHook(() => useRedirectTo(user));

        expect(mockPush).toHaveBeenCalledWith('/');
    });

    it('should redirect to the new route if route parameter changes (future-proofing)', () => {
        const user: User = { uid: '26104a55-89d3-453f-85b9-8304c30c7b81' } as User;
        const { rerender } = renderHook(({ user, route }: { user: User; route: string }) => useRedirectTo(user, route), {
            initialProps: { user, route: '/initial' },
        });

        expect(mockPush).toHaveBeenCalledWith('/initial');

        rerender({ user, route: '/new-route' });
        expect(mockPush).toHaveBeenCalledWith('/new-route');
    });
});
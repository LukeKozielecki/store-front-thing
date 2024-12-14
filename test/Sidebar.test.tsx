import '@testing-library/jest-dom'
import {it, expect, describe, vi} from "vitest";
import { render, screen } from '@testing-library/react';
import DesktopSidebar from "@/app/components/DesktopSidebar";

vi.mock('@/app/components/sidebar/menuItems', () => ({
    primaryMenuItems: ['Home', 'About', 'Services'],
    utilityMenuItems: ['Settings', 'Logout']
}));

describe('Sidebar', () => {
    it('renders the brand logo and title', () => {
        render(<DesktopSidebar />);

        const brandLink = screen.getByRole('link', { name: /duality of cat/i });
        const brandImage = screen.getByAltText(/duality of cat brand logo/i);

        expect(brandLink).toBeInTheDocument();
        expect(brandImage).toBeInTheDocument();
    });

    it('renders primary menu items', () => {
        render(<DesktopSidebar />);

        const primaryItems = ['Home', 'About', 'Services'];
        primaryItems.forEach(item => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });
    });

    it('renders utility menu items', () => {
        render(<DesktopSidebar />);

        const utilityItems = ['Settings', 'Logout'];
        utilityItems.forEach(item => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });
    });
});
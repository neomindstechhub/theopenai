import React, { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  Compass,
  LayoutDashboard,
  MessageSquare,
  Briefcase,
  FileText,
  Settings,
  X,
  Menu,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "#/context/ThemeContext";

export default function ClientAside() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      isRealRoute: true,
      Icon: LayoutDashboard,
    },
    {
      name: "Chat Assistant",
      href: "#",
      isRealRoute: false,
      Icon: MessageSquare,
    },
    {
      name: "Projects",
      href: "/projects",
      isRealRoute: true,
      Icon: Briefcase,
    },
    { name: "Reports", href: "#", isRealRoute: false, Icon: FileText },
    { name: "Settings", href: "#", isRealRoute: false, Icon: Settings },
  ];

  const onClose = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Header Bar */}
      <header className="md:hidden flex items-center justify-between px-6 py-4 border-b border-foreground/10 bg-card select-none shrink-0">
        <span className="font-bold text-foreground text-sm tracking-tight">
          The Open AI
        </span>
        <div className="flex items-center gap-2">
          {/* Mobile Header Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-xl transition-all active:scale-95 cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          {/* Mobile Sidebar Hamburger Trigger */}
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-xl transition-all cursor-pointer"
            aria-label="Open sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-card/50 backdrop-blur-xs z-40 md:hidden transition-opacity duration-300"
        />
      )}

      {/* Sidebar Panel Container */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 border-r border-foreground/10 bg-card flex flex-col h-screen z-50 transition-transform duration-300 shrink-0 select-none md:sticky md:top-0 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand Logo Header */}
        <div className="p-6 border-b border-foreground/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-card">
              <Compass className="h-4.5 w-4.5" />
            </div>
            <span className="font-bold text-foreground tracking-tight text-base">
              The Open{" "}
              <span className="text-foreground/75 font-normal">AI</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {/* Desktop / Sidebar Open Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 text-foreground/50 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors active:scale-95 cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Sun className="h-4.5 w-4.5" />
              ) : (
                <Moon className="h-4.5 w-4.5" />
              )}
            </button>
            {/* Mobile Close Button */}
            <button
              onClick={onClose}
              className="md:hidden p-1.5 text-foreground/50 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors cursor-pointer"
              aria-label="Close sidebar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {menuItems.map((item) => {
            const isActive =
              currentPath === item.href ||
              (item.href !== "/" && item.href !== "#" && currentPath.startsWith(item.href));
            const Icon = item.Icon;

            const handleClick = (e: React.MouseEvent) => {
              if (!item.isRealRoute) {
                e.preventDefault();
              } else {
                onClose(); // Close mobile drawer when user navigates
              }
            };

            if (item.isRealRoute) {
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleClick}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 group ${
                    isActive
                      ? "bg-foreground/5 text-foreground translate-x-1"
                      : "text-foreground/60 hover:text-foreground hover:bg-foreground/5 hover:translate-x-0.5"
                  }`}
                >
                  <Icon
                    className={`h-4.5 w-4.5 transition-all duration-200 ${
                      isActive
                        ? "text-accent scale-105"
                        : "text-foreground/45 group-hover:text-foreground/70 group-hover:scale-105"
                    }`}
                  />
                  {item.name}
                </Link>
              );
            } else {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleClick}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 group text-foreground/60 hover:text-foreground hover:bg-foreground/5 hover:translate-x-0.5 cursor-pointer"
                >
                  <Icon className="h-4.5 w-4.5 text-foreground/45 group-hover:text-foreground/70 group-hover:scale-105 transition-all duration-200" />
                  {item.name}
                </a>
              );
            }
          })}
        </nav>

        {/* User Profile Card */}
        <div className="p-5 border-t border-foreground/10 flex items-center gap-3">
          <img
            src="/images/avatar_john_doe.png"
            alt="John Doe"
            className="h-9 w-9 rounded-full object-cover border border-foreground/10"
          />
          <div className="min-w-0">
            <p className="text-sm font-bold text-foreground truncate">
              John Doe
            </p>
            <p className="text-xs text-foreground/50 truncate">
              john@example.com
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

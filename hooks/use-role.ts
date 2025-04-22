"use client";

import { useState, useEffect } from "react";

export type UserRole = "Parent" | "Tutor" | null;

export function useRole() {
  const [role, setRole] = useState<UserRole>(null);

  useEffect(() => {
    // Get role from localStorage on mount
    const storedRole = localStorage.getItem("userRole") as UserRole;
    setRole(storedRole);
  }, []);

  const updateRole = (newRole: UserRole) => {
    if (newRole) {
      localStorage.setItem("userRole", newRole);
    } else {
      localStorage.removeItem("userRole");
    }
    setRole(newRole);
  };

  return { role, updateRole };
}

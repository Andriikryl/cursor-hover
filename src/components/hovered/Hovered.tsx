"use client";
import { useHoverStore } from "@/store/store";
import React, { ReactNode, useState } from "react";

interface HoveredProps {
  children: ReactNode;
}

export default function Hovered({ children }: HoveredProps) {
  const { setHovered } = useHoverStore();
  return (
    <div
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

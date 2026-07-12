'use client';

import React, { useState, useId } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

type Transition = React.ComponentProps<typeof motion.div>['transition'];

interface AnimatedBackgroundProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: React.ReactElement<any>[];
  defaultValue?: string;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
}

export function AnimatedBackground({
  children,
  defaultValue,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  // activeId follows defaultValue (e.g. the current pathname) directly, so the
  // active indicator updates on navigation without needing local state.
  const activeId = defaultValue ?? null;
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const uid = useId();

  const visibleId = enableHover ? (hoveredId ?? activeId) : activeId;

  return (
    <>
      {React.Children.map(children, (child) => {
        const id = child.props['data-id'];
        const isActive = visibleId === id;

        return (
          <div
            key={id}
            className='relative'
            onPointerEnter={enableHover ? () => setHoveredId(id) : undefined}
            onPointerLeave={enableHover ? () => setHoveredId(null) : undefined}
          >
            {isActive && (
              <motion.div
                layoutId={`animated-bg-${uid}`}
                className={cn('absolute inset-0', className)}
                transition={transition}
              />
            )}
            {React.cloneElement(child, {
              className: cn(child.props.className, 'relative z-10'),
            })}
          </div>
        );
      })}
    </>
  );
}

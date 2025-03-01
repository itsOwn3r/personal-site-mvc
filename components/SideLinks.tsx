import React from 'react';
import { cn } from '@/lib/utils';


const SideLinks = ({ children, side }: { children: React.ReactNode, side: "left" | "right"}) => {
  return (
    <div className={cn('w-10 fixed bottom-0 z-10 text-slate-400', side === "left" ? 'left-10 right-[auto]' : 'right-10 left-[auto]')}>
        {children}
    </div>
  )
}

export default SideLinks
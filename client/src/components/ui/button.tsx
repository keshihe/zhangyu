import { type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-blue-800 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500',
        className,
      )}
      {...props}
    />
  );
}

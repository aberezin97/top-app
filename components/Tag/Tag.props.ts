import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'normal' | 'large';
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
  href?: string;
  children: React.ReactNode;
}

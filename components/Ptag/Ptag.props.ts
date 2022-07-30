import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: 'small' | 'normal' | 'large';
  children: React.ReactNode;
}

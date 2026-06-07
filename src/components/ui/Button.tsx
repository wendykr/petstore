import React, { ReactNode } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  loadingText?: string;
  iconLeading?: ReactNode;
  iconTrailing?: ReactNode;
  iconOnly?: boolean;
  href?: string;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  loading,
  loadingText,
  iconLeading,
  iconTrailing,
  iconOnly,
  href,
  children,
  disabled,
  className,
  ...rest
}: ButtonProps) => {
  const buttonClasses = clsx(
    styles.btn,
    styles[variant],
    styles[size],
    iconOnly && styles.iconOnly,
    loading && styles.loading,
    className,
  );

  const content = (
    <>
      {(iconLeading && !loading) && <span className={styles.icon} aria-hidden="true">{iconLeading}</span>}
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      {!iconOnly && (loading && loadingText ? loadingText : children)}
      {(!iconOnly && iconTrailing && !loading) && <span className={styles.icon} aria-hidden="true">{iconTrailing}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} disabled={disabled || loading} aria-busy={loading} {...rest}>
      {content}
    </button>
  );
}

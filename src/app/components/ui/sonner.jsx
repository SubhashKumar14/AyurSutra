"use client";

import { useTheme } from "next-themes";

    $before = $args[0].Groups[1].Value
    $after = $args[0].Groups[2].Value
    $joined = ($before + $after) -replace ',\s*,', ','
    $joined = $joined.Trim().Trim(',')
    if ($joined -match '^\s*

const Toaster = ({ ...props }: ) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        }
      }
      {...props}
    />
  );
};

export { Toaster };
) { return '' }
    return 'import { ' + $joined + ' } from "sonner";'
  

const Toaster = ({ ...props }: ) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        }
      }
      {...props}
    />
  );
};

export { Toaster };


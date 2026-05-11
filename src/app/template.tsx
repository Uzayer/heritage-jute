import type { ReactNode } from "react";

/** Next.js route template — avoids wrapping page content in `AnimatePresence` / root
 * motion nodes that can interfere with descendant `whileInView` observers. */
export default function Template({ children }: { children: ReactNode }) {
  return children;
}

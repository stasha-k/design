import { useEffect } from "react";

// Every route calls this with its own title/description, so each
// navigation sets explicit, correct values rather than relying on
// restoring whatever the previous route happened to leave behind.
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    descriptionTag?.setAttribute("content", description);
  }, [title, description]);
}

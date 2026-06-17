#!/usr/bin/env python3
"""Serve the static site locally with the same friendly routes as Vercel."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent.parent
ROUTES = {
    "/": "screens/home.html",
    "/About": "screens/company/about.html",
    "/Blog": "screens/blog/index.html",
    "/Contact": "screens/company/contact.html",
    "/Privacy": "screens/legal/privacy.html",
    "/Privacy-ko": "screens/legal/privacy-ko.html",
    "/Terms": "screens/legal/terms.html",
    "/blog-business-cards": "screens/blog/posts/business-cards.html",
    "/blog-calm-by-default": "screens/blog/posts/calm-by-default.html",
    "/blog-essential-thesis": "screens/blog/posts/essential-thesis.html",
    "/blog-sd-card-guide": "screens/blog/posts/sd-card-guide.html",
    "/blog-why-friddy": "screens/blog/posts/why-friddy.html",
}
# Permanent redirects from legacy slugs to their canonical routes (mirrors vercel.json).
REDIRECTS = {
    "/privacy-policy-for-friddy": "/Privacy",
    "/ko-privacy-policy-for-friddy": "/Privacy-ko",
}


class SiteRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def _resolve(self):
        """Apply redirects and friendly-route rewrites. Returns True if a redirect was sent."""
        path = urlsplit(self.path).path.rstrip("/") or "/"
        target = REDIRECTS.get(path)
        if target:
            self.send_response(308)
            self.send_header("Location", target)
            self.end_headers()
            return True
        route = ROUTES.get(path)
        if route:
            self.path = f"/{route}"
        return False

    def do_GET(self):
        if self._resolve():
            return
        super().do_GET()

    def do_HEAD(self):
        if self._resolve():
            return
        super().do_HEAD()


if __name__ == "__main__":
    server = ThreadingHTTPServer(("", 3000), SiteRequestHandler)
    print("Serving Everything Essential at http://localhost:3000")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()

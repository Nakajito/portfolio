export default function splitPathname(pathname: string): string[] {

  // Handle the home route
  if (pathname === '/' || pathname === '') {
    return ['/'];
  }
  // Split the pathname by '/' and filter out empty segments
  const segments = pathname.split('/').filter(segment => segment !== '');

  // Return the segments as an array
  return segments.map((_, index, array) => {
    return '/' + array.slice(0, index + 1).join('/');
  });
}


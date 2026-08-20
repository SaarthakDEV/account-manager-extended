

export async function GET() {
  const users = "WEBPACK_MODE_TEST_$(date +%s) fgdfgdfgdfgdfg";
  return Response.json(users);
}

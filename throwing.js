let json = '{"age":30}';

try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  console.log(user.name);
  console.log(user.age);
} catch (err) {
  if (err instanceof SyntaxError) {
    console.log(`JSON Error: ${err.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}

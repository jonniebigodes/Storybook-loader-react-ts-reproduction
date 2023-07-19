interface User {
  id?: string;
  username?: string;
  name?: string;
  email?: string;
  phone?: string;
  website?: string;
}

export const UserInfo = ({
  id = "0",
  username = "No Username provided",
  name = "No Info provided",
  email = "example@mail.com",
  phone = "111-111-111",
  website = "http://example.com",
}: User) => {
  return (
    <div>
      <h1>Example component Storybook loader</h1>
      <h2>
        {name} with id of {id}
      </h2>
      <h3>
        {username} with email of {email}
      </h3>
      <h3>Located in</h3>
      <p>
        {phone} - {website}
      </p>
    </div>
  );
};

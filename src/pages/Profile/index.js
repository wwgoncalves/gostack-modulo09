import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Form initialData={profile}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your e-mail address" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Your current password"
        />
        <Input
          type="password"
          name="password"
          placeholder="Your new password"
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your new password"
        />

        <button type="submit">Update profile</button>
      </Form>

      <button type="button">Sign out of GoBarber</button>
    </Container>
  );
}

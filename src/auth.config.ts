import Credential from 'next-auth/providers/credentials';

import type { NextAuthConfig } from 'next-auth';

export default {
    providers: [Credential]
} satisfies NextAuthConfig
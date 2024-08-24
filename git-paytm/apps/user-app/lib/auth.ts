import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

export const authOptions = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            phone: { label: "Phone number", type: "text", placeholder: "1231231231" },
            password: { label: "Password", type: "password" }
          },
          // TODO: User credentials type from next-aut
          async authorize(credentials: any) {
            // Do zod validation, OTP validation here
            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            const existingUser = await db.user.findFirst({
                where: {
                    number: credentials.phone
                }
            });

            if (existingUser) {
                const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                if (passwordValidation) {
                    console.log(existingUser);
                    return {
                        id: existingUser.id.toString(),
                        name: existingUser.name,
                        number: existingUser.number.toString()
                    }
                }
                return null;
            }

            try {
                const user = await db.user.create({
                    data: {
                        number: credentials.phone,
                        password: hashedPassword
                    }
                });
                console.log(user)
                return {
                    id: user.id.toString(),
                    name: user.name,
                    number: user.number.toString()
                }
            } catch(e) {
                console.error(e);
            }

            return null
          },
        })
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {

        jwt({token, user}:any) {
            if (user) {
                token.id = user.id;
                token.number = user.number;
            }
            return token;
        },
        // TODO: can u fix the type here? Using any is bad
        async session({ token, session }: any) {
            // console.log(token);
            session.user.id = token.sub
            session.user.number = token.number
            // console.log(session);
            return session
        }
    }
  }
 
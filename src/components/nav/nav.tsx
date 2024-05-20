"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { memo } from "react";
import Image from "next/image";
const Nav = () => {
  const { user, error, isLoading } = useUser();

  return (
    <nav>
      {user ? (
        <>
          <Image
            src={user.picture ?? ""}
            alt="profile picture"
            width={64}
            height={64}
          />
          <span>{user.email}</span>
          <button>
            <a href="/api/auth/logout">Logout</a>
          </button>
        </>
      ) : (
        <button>
          <a href="/api/auth/login">Login</a>
        </button>
      )}
    </nav>
  );
};

export default memo(Nav);

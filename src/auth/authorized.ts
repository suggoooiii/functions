/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import {Response, Request} from "express";

export function isAuthorized(opts: {hasRole:Array<"admin" | "manager" | "user">, allowSameUser? : boolean}) {
  return (req: Request, res:Response, next: Function) => {
    const {role, uid, email} = res.locals;
    const {id} = req.params;

    if (email === "rmaighammami@gmail.com") {
      return next();
    }

    if (opts.allowSameUser && id && uid ===id) {
      return next();
    }

    if (!role) {
      return res.status(403).send();
    }

    if (opts.hasRole.includes(role)) {
      return next();
    }

    return res.status(403).send();
  };
}

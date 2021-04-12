import { Request, Response } from 'express';

import db from '../database/connection';

const ConnectionsController = () => {
  const index = async (req: Request, res: Response) => {
    const totalConnections = await db('connections').count('* as total');

    const { total } = totalConnections[0];

    return res.json({ total });
  };

  const create = async (req: Request, res: Response) => {
    const { user_id } = req.body;

    await db('connections').insert({ user_id });

    return res.status(201).send();
  };

  return { index, create };
};

export default ConnectionsController();

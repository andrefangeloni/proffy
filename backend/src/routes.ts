import express from 'express';

import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

const routes = express.Router();

routes.post('/classes', async (req, res) => {
  const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

  const trx = await db.transaction();

  try {
    const insertedUsersId = await trx('users').insert({
      name,
      avatar,
      whatsapp,
      bio,
    });

    const user_id = insertedUsersId[0];

    const insertedClassesIds = await trx('classes').insert({
      subject,
      cost,
      user_id,
    });

    const class_id = insertedClassesIds[0];

    const classSchedule = schedule.map((item: ScheduleItem) => {
      return {
        class_id,
        week_day: item.week_day,
        from: convertHourToMinutes(item.from),
        to: convertHourToMinutes(item.to),
      };
    });

    await trx('class_schedule').insert(classSchedule);

    await trx.commit();

    return res.status(201).send();
  } catch (err) {
    await trx.rollback();

    return res.status(400).json({
      error: 'Unexpected error',
    });
  }
});

export default routes;

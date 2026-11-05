import prisma from '../config/db.js';

export async function findAll(completed) {
  // Prisma ignores a filter set to undefined, so no value = all tasks.
  return prisma.task.findMany({
    where: { completed },
  });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

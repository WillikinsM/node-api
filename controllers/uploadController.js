import { Express } from "express";

export default {
  async create(request, response) {
    const file = request.file;
    const img = file.map((file) => {
      return { path: file.filename };
    });
  },
};

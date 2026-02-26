import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import is from './../node_modules/prettier/plugins/typescript';

export default defineSchema({
  todos: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  })
})
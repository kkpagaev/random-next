ALTER TABLE "users" RENAME COLUMN "full_name" TO "name";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "email" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "password" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "username";
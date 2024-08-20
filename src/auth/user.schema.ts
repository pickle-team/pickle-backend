import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document, HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  school: string;

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  color: string;

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  kakaoid: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

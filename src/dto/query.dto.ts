import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsNumberString,
  IsOptional,
} from 'class-validator';
import {
  toBoolean,
  toLowerCase,
  toNumber,
  trim,
  toDate,
  defaultValue,
} from '../helper/cast.helper';

export class QueryDto {
  @Transform(({ value }) => toNumber(value, { default: 1, min: 1 }))
  @IsNumber()
  @IsOptional()
  public page = 1;

  @Transform(({ value }) => toNumber(value, { default: 10, min: 1 }))
  @IsNumber()
  @IsOptional()
  public per_page: 10;

  @IsOptional()
  public sort_by: 'createdAt';

  @IsOptional()
  public sort: 'desc';

  @Transform(({ value }) => toLowerCase(value))
  @IsOptional()
  public search: string;

  @IsOptional()
  public brand: string;

  @IsOptional()
  public color: string;
}

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
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
  @ApiPropertyOptional()
  @Transform(({ value }) => toNumber(value, { default: 1, min: 1 }))
  @IsNumber()
  @IsOptional()
  public page = 1;

  @ApiPropertyOptional()
  @Transform(({ value }) => toNumber(value, { default: 10, min: 1 }))
  @IsNumber()
  @IsOptional()
  public per_page: 10;

  @ApiPropertyOptional()
  @IsOptional()
  public sort_by: 'createdAt';

  @ApiPropertyOptional()
  @IsOptional()
  public sort: 'desc';

  @ApiPropertyOptional()
  @Transform(({ value }) => toLowerCase(value))
  @IsOptional()
  public search: string;

  @ApiPropertyOptional()
  @IsOptional()
  public brand: string;

  @ApiPropertyOptional()
  @IsOptional()
  public color: string;
}

import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { BadFormatIdError } from '../error/bad-format-id.error';

@Injectable()
export class IdFormatValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!Number.isInteger(+value)) throw new BadFormatIdError();

    return +value;
  }
}

import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { BadFormatError } from '../error/bad-format.error';

@Injectable()
export class IdFormatValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!Number.isInteger(+value)) throw new BadFormatError('id');

    return +value;
  }
}

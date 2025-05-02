import { Pipe, PipeTransform } from '@angular/core';


/**
 * Angular pipe to round a number to the nearest integer.
 * 
 * This pipe can be used in templates to round floating-point numbers
 * to their closest whole number using `Math.round()`.
 */
@Pipe({
  name: 'round',
  standalone: true
})
export class RoundPipe implements PipeTransform {


  /**
   * Transforms the input number by rounding it to the nearest integer.
   *
   * @param value - The number to round.
   * @returns The rounded integer.
   */
  transform(value: number): number {
    return Math.round(value);
  }
}
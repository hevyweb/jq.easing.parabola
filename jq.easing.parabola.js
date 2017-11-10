/*
 * jQuery Easing v1.0 - https://github.com/hevyweb/jq.easing.parabola
 *
 * jQuery easing in a form of parabola
 *
 * MIT License
 *
 * Copyright (c) 2017 Dmytro Dzyuba
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
*/

$.extend($.easing,
    {
        /**
         * Change data according to the parabola formula.
         *
         * @param float timeDelta is time/duration
         * @param number time milliseconds from the start of the animation
         * @param number initialValue initial value
         * @param number delta difference between final value and initial value
         * @param number duration time in milliseconds - animation duration
         * @returns number
         */
        parabola: function (timeDelta, time, initialValue, delta, duration) {
            return initialValue + delta * Math.sqrt(1 - Math.pow((2 * timeDelta - 1), 2));
        }
    });
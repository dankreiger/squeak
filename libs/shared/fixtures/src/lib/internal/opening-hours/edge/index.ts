/**
 * see individual files for descriptions
 */
export * from './edgef0.shared.fixtures';
export * from './edgef1.shared.fixtures';
export * from './edgef2.shared.fixtures';
export * from './edgef3.shared.fixtures';

/**
 * TODO: mock a daylight saving time test scenario
 */

/**
 *
 * future synchronous edge cases
 * - restaurant is open for a duration >= 48 hrs.
 *
 * future async edge cases
 * - daylight savings time occurs during a user session (test websocket/polling solution on a DST day)
 * - example DST dates:
 *    e.g.
 *    const clockForwardDay = new Date('Sun Mar 28 2021');
 *    const clockBackDay = new Date('Sun Oct 31 2021');
 * - restaurant hours are changed from the backend during a user session
 */

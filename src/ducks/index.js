/**
 * Import reducers from shared ducks modules (default export)
 * We are following Ducks module proposition:
 * https://github.com/erikras/ducks-modular-redux
 */

import Auth from './Auth.duck';
import EmailVerification from './EmailVerification.duck';
import routing from './routing.duck';
import UI from './UI.duck';
import hostedAssets from './hostedAssets.duck';
import marketplaceData from './marketplaceData.duck';
import paymentMethods from './paymentMethods.duck';
import stripe from './stripe.duck';
import stripeConnectAccount from './stripeConnectAccount.duck';
import user from './user.duck';

export {
  Auth,
  EmailVerification,
  routing,
  UI,
  hostedAssets,
  marketplaceData,
  paymentMethods,
  stripe,
  stripeConnectAccount,
  user,
};

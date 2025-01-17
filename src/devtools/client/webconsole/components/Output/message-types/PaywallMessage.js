/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

// React & Redux
const { createElement, createFactory, useEffect } = require("react");
const PropTypes = require("prop-types");
const Message = createFactory(require("devtools/client/webconsole/components/Output/Message"));

PaywallMessage.displayName = "PaywallMessage";

PaywallMessage.propTypes = {
  message: PropTypes.object.isRequired,
  timestampsVisible: PropTypes.bool.isRequired,
  maybeScrollToBottom: PropTypes.func,
};

/**
 * Displays input from the console.
 */
function PaywallMessage(props) {
  const { message, timestampsVisible, maybeScrollToBottom, isPaused, dispatch } = props;
  const { indent, source, level, timeStamp, executionPointTime } = message;

  return Message({
    source,
    type: "paywall",
    level,
    topLevelClasses: [],
    messageBody: createElement("span", {
      className: "text-gray-500 font-bold",
      children: "Evaluations are only available for Developers in the Team plan.",
    }),
    indent,
    timeStamp,
    timestampsVisible,
    executionPointTime,
    maybeScrollToBottom,
    message,
    isPaused,
    dispatch,
  });
}

module.exports = PaywallMessage;

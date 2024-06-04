declare module "react-native-mds" {
    /**
     * Starts a Bluetooth scan for nearby Movesense devices.
     * @param scanHandler - A callback function that is called for each device found during the scan. The callback receives the device's name and address as parameters.
     */
    function scan(scanHandler: (name: string, address: string) => void): void;
    /**
     * Stops the ongoing Bluetooth scan for nearby Movesense devices.
     */
    function stopScan(): void;
    /**
     * Sets the callback functions for handling device connection and disconnection events.
     * @param deviceConnected - A callback function that is called when a device is connected. The callback receives the serial number of the connected device as a parameter.
     * @param deviceDisconnected - A callback function that is called when a device is disconnected. The callback receives the serial number of the disconnected device as a parameter.
     */
    function setHandlers(
        deviceConnected: (serial: string) => void,
        deviceDisconnected: (serial: string) => void
    ): void;
    /**
     * Connects to a Movesense device with the given MAC address.
     * @param address - The MAC address of the device to connect to.
     */
    function connect(address: string): void;
    /**
     * Disconnects from a Movesense device with the given MAC address.
     * @param address - The MAC address of the device to disconnect from.
     */
    function disconnect(address: string): void;
    /**
     * Sends a GET request to the specified Movesense device and contract.
     * @param serial - The serial number of the Movesense device to send the request to.
     * @param uri - The URI of the resource to retrieve.
     * @param contract - The contract to use for the request.
     * @param onResponse - A callback function that is called with the response data when the request succeeds.
     * @param onError - A callback function that is called with an error object when the request fails.
     */
    function get(
        serial: string,
        uri: string,
        contract: string,
        onResponse: (response: string) => void,
        onError: (err: { statusCode: number; detailMessage: string }) => void
    ): void;
    /**
     * Sends a PUT request to the specified Movesense device and contract.
     * @param serial - The serial number of the Movesense device to send the request to.
     * @param uri - The URI of the resource to update.
     * @param contract - The contract to use for the request.
     * @param onResponse - A callback function that is called with the response data when the request succeeds.
     * @param onError - A callback function that is called with an error object when the request fails.
     */
    function put(
        serial: string,
        uri: string,
        contract: string,
        onResponse: (response: string) => void,
        onError: (err: { statusCode: number; detailMessage: string }) => void
    ): void;
    /**
     * Sends a POST request to the specified Movesense device and contract.
     * @param serial - The serial number of the Movesense device to send the request to.
     * @param uri - The URI of the resource to update.
     * @param contract - The contract to use for the request.
     * @param onResponse - A callback function that is called with the response data when the request succeeds.
     * @param onError - A callback function that is called with an error object when the request fails.
     */
    function post(
        serial: string,
        uri: string,
        contract: string,
        onResponse: (response: string) => void,
        onError: (err: { statusCode: number; detailMessage: string }) => void
    ): void;
    /**
     * Sends a DELETE request to the specified Movesense device and contract.
     * @param serial - The serial number of the Movesense device to send the request to.
     * @param uri - The URI of the resource to delete.
     * @param contract - The contract to use for the request.
     * @param onResponse - A callback function that is called with the response data when the request succeeds.
     * @param onError - A callback function that is called with an error object when the request fails.
     */
    function del(
        serial: string,
        uri: string,
        contract: string,
        onResponse: (response: string) => void,
        onError: (err: { statusCode: number; detailMessage: string }) => void
    ): void;
    /**
     * Subscribe to a URI on a Movesense device to recieve updates about it.
     * @param serial - The serial number of the Movesense device to subscribe to.
     * @param uri - The URI of the resource to subscribe to.
     * @param contract - The contract to use for the subscription request.
     * @param onResponse - A callback function that is called with the response data when the subscription request succeeds.
     * @param onError - A callback function that is called with an error object when the subscription request fails.
     * @returns The subscription ID that can be used later to unsubscribe.
     */
    function subscribe(
        serial: string,
        uri: string,
        contract: string,
        onResponse: (response: string) => void,
        onError: (err: { statusCode: number; detailMessage: string }) => void
    ): number;
    /**
     * Unsubscribe from a subscription to a device update.
     * @param subscriptionId - The subscription ID of the subscription to unsbscribe from.
     */
    function unsubscribe(subscriptionId: number): void;
}

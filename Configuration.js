function getConfiguration(config)
{
  // This function allows you to indicate general configuration values
  // for all devices of this model.

  // Depending on the meaning of the "device address" in this device, 
  // you may want to change the label that is used to refer to the 
  // address in the user interface.
  // For instance, if the address of the device is actually a MAC 
  // address, you may want to use the code below.
  
  // config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
 endpoints.addEndpoint("WHP", "WHP", endpointType.pressureSensor);
    endpoints.addEndpoint("LP", "LP", endpointType.pressureSensor);
    endpoints.addEndpoint("VALVE_STATUS", "VALVE_STATUS", endpointType.genericSensor)
        .variableTypeId = 1044;

    endpoints.addEndpoint("LAST_SHUT_IN_HOUR", "LAST_SHUT_IN_HOUR", endpointType.genericSensor)
        .variableTypeId = 10400008;

    endpoints.addEndpoint("SHUT_IN_OPENING_PRE", "SHUT_IN_OPENING_PRE", endpointType.pressureSensor);
    endpoints.addEndpoint("MAINT_CYCLES_OPENING_PRE", "MAINT_CYCLES_OPENING_PRE", endpointType.pressureSensor);
    endpoints.addEndpoint("MAX_PRE_TO_OPEN", "MAX_PRE_TO_OPEN", endpointType.pressureSensor);

    endpoints.addEndpoint("Location", "Location", endpointType.locationTracker);
    
    endpoints.addEndpoint("OPEN_VALVE_TIME_COUNTER", "OPEN_VALVE_TIME_COUNTER", endpointType.genericSensor)
        .variableTypeId = 1048;

    endpoints.addEndpoint("WHT", "WHT", endpointType.temperatureSensor);
    endpoints.addEndpoint("UPSTREAM_PRE", "UPSTREAM_PRE", endpointType.pressureSensor);

    endpoints.addEndpoint("SHUT_IN_MIN_TURNER", "SHUT_IN_MIN_TURNER", endpointType.genericSensor)
        .variableTypeId = 10360;

    endpoints.addEndpoint("MAINT_CYCLES_MIN_TURNER", "MAINT_CYCLES_MIN_TURNER", endpointType.genericSensor)
        .variableTypeId = 10360;

    endpoints.addEndpoint("GAS_FLOW_RATE", "GAS_FLOW_RATE", endpointType.genericSensor)
        .variableTypeId = 10370;

    endpoints.addEndpoint("LIQUID_FLOW_RATE", "LIQUID_FLOW_RATE", endpointType.genericSensor)
        .variableTypeId = 1037;
    
    endpoints.addEndpoint("AI1_CONNECTED", "AI1_CONNECTED", endpointType.genericSensor)
        .variableTypeId = 104901;
    
    endpoints.addEndpoint("AI2_CONNECTED", "AI2_CONNECTED", endpointType.genericSensor)
        .variableTypeId = 1049;

    endpoints.addEndpoint("AI3_CONNECTED", "AI3_CONNECTED", endpointType.genericSensor)
        .variableTypeId = 104901;

    endpoints.addEndpoint("AI4_CONNECTED", "AI4_CONNECTED", endpointType.genericSensor)
        .variableTypeId = 1049;

    endpoints.addEndpoint("SHUT_IN_OPENING_TIME", "SHUT_IN_OPENING_TIME", endpointType.genericSensor)
        .variableTypeId = 104801;
    
    endpoints.addEndpoint("SHUT_IN_CLOSING_TIME", "SHUT_IN_CLOSING_TIME", endpointType.genericSensor)
        .variableTypeId = 1048;
    
    endpoints.addEndpoint("SHUT_IN_MIN_CLOSED_VALVE_TIME", "SHUT_IN_MIN_CLOSED_VALVE_TIME", endpointType.genericSensor)
        .variableTypeId = 1048;
    
    endpoints.addEndpoint("SHUT_IN_MAX_CLOSED_VALVE_TIME", "SHUT_IN_MAX_CLOSED_VALVE_TIME", endpointType.genericSensor)
        .variableTypeId = 1048;
    
    endpoints.addEndpoint("CLOSED_VALVE_TIME_COUNTER", "CLOSED_VALVE_TIME_COUNTER", endpointType.genericSensor)
        .variableTypeId = 1048;

    endpoints.addEndpoint("MAINT_CYCLES_CLOSING_TIME", "MAINT_CYCLES_CLOSING_TIME", endpointType.genericSensor)
        .variableTypeId = 104801;

    endpoints.addEndpoint("MAINT_CYCLES_OPENING_TIME", "MAINT_CYCLES_OPENING_TIME", endpointType.genericSensor)
        .variableTypeId = 1048;

    endpoints.addEndpoint("MAINT_CYCLES_MIN_CLOSED_VALVE_TIME", "MAINT_CYCLES_MIN_CLOSED_VALVE_TIME", endpointType.genericSensor)
        .variableTypeId = 1048;

    endpoints.addEndpoint("MAINT_CYCLES_MAX_CLOSED_VALVE_TIME", "MAINT_CYCLES_MAX_CLOSED_VALVE_TIME", endpointType.genericSensor)
        .variableTypeId = 1048;

    endpoints.addEndpoint("MAINT_CYCLES_MIN_OPEN_VALVE_TIME", "MAINT_CYCLES_MIN_OPEN_VALVE_TIME", endpointType.genericSensor)
        .variableTypeId = 104801;

    endpoints.addEndpoint("MAINT_CYCLES_MAX_OPEN_VALVE_TIME", "MAINT_CYCLES_MAX_OPEN_VALVE_TIME", endpointType.genericSensor)
        .variableTypeId = 1048;

    endpoints.addEndpoint("OPMODE", "OPMODE", endpointType.genericSensor)
        .variableTypeId = 104501;

    endpoints.addEndpoint("SHUT_IN_REP_INTERVAL", "SHUT_IN_REP_INTERVAL", endpointType.genericSensor)
        .variableTypeId = 1048;

    endpoints.addEndpoint("LAST_SHUT_IN_DAY", "LAST_SHUT_IN_DAY", endpointType.genericSensor)
        .variableTypeId = 103801;

    endpoints.addEndpoint("LAST_SHUT_IN_MONTH", "LAST_SHUT_IN_MONTH", endpointType.genericSensor)
        .variableTypeId = 103901;

    endpoints.addEndpoint("MAINT_CYCLES_OPENING_MODE", "MAINT_CYCLES_OPENING_MODE", endpointType.genericSensor)
        .variableTypeId = 104301;

    endpoints.addEndpoint("MAINT_CYCLES_CLOSING_MODE", "MAINT_CYCLES_CLOSING_MODE", endpointType.genericSensor)
        .variableTypeId = 104201;

    endpoints.addEndpoint("SHUT_IN_OPENING_MODE", "SHUT_IN_OPENING_MODE", endpointType.genericSensor)
        .variableTypeId = 1047;

    endpoints.addEndpoint("SHUT_IN_CLOSING_MODE", "SHUT_IN_CLOSING_MODE", endpointType.genericSensor)
        .variableTypeId = 104601;

    endpoints.addEndpoint("FLOW_TYPE", "FLOW_TYPE", endpointType.genericSensor)
        .variableTypeId = 104001;

    endpoints.addEndpoint("FLOW_REGIME", "FLOW_REGIME", endpointType.genericSensor)
        .variableTypeId = 104101;
}

function validateDeviceAddress(address, result)
{
  // This function allows you to validate the address of a device, when
  // the user is creating it. If your device has special validation rules
  // for the address, you can check them here, and return an error message
  // in case the address format is incorrect.

  // In the code below, a validation is made to ensure that the address 
  // is exactly 10 characters long.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // This function allows you to specify UI rules at the device level.
  // For instance, you can make it possible to enable or disable adding
  // endpoints manually to the device after it was created.
  
  // In the code below, adding endpoints manually is disabled in the
  // user interface. This means that the device will be limited to the 
  // endpoints defined by function getEndpoints() above.
  
  // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  // This function allows you to specify UI rules at the endpoint level.
  // For instance, you can make it possible to delete certain endpoints, 
  // or edit their endpoint subtype, if applicable.

  // In the code below, the following rules are defined:
  // - Endpoints cannot be deleted.
  // - The endpoint subtype can be changed, but only for the second 
  //   endpoint.
  
  // rules.canDelete = false;
  // rules.canEditSubType = (endpoint.address == "2");
}

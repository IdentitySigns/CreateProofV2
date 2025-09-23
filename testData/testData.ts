export const testData = {
    "id": 1041,
    "orderNumber": "EST-1040",
    "orderDescription": "AUTOMATION TEST DATA Vinyl Banner",
    "hasDocuments": false,
    "status": "Estimate Pending",
    "tax": 37.24,
    "beforeTax": 513.67,
    "orderTotal": 550.91,
    "destinations": {
        "name": "Pickup"
    },
    "paymentBalanceDue": 550.91,
    "employees": [
        {
            "roleID": 1,
            "employeeID": 1006,
            "position": null,
            "employeeName": "Brett Dykes",
            "userRole": "Salesperson"
        },
        {
            "roleID": 254,
            "employeeID": 1005,
            "position": null,
            "employeeName": "Tom Ruff",
            "userRole": "Entered By"
        }
    ],
    "clientInfo": {
        "clientName": "Walk In",
        "contactPhone": "(801) 748-4750",
        "contactEmail": "Sales@idsignco.com",
        "shippingInfo": {
            "Street1": "9913 S 500 W",
            "City": "Sandy",
            "State": "UT",
            "PostalCode": "84070",
            "Country": "US",
            "TaxClassID": 0
        }
    },
    "updates": [
        {
            "ID": 1421,
            "KeyDateType": "Followup",
            "KeyDT": "2025-08-29T20:00:00Z",
            "IsFirmDate": false
        },
        {
            "ID": 1425,
            "KeyDateType": "Created",
            "KeyDT": "2025-08-01T12:30:29.71Z",
            "IsFirmDate": false
        },
        {
            "ID": 1426,
            "KeyDateType": "Pending",
            "KeyDT": "2025-08-01T12:30:29.72Z",
            "IsFirmDate": false
        }
    ],
    "lineItems": [
        {
            "id": 1106,
            "itemName": "Roll Stock Prints ",
            "itemNumber": 1,
            "description": "@",
            "priceTotal": 101.67,
            "costMaterial": 13.6,
            "costLabor": 8.33,
            "costMachine": 2.2,
            "costTotal": 24.13,
            "thumbNailSrc": "https://identitysigns-x3-fai8o.your-cloudlab.com/media/.renditions/wysiwyg/IdentitySigns/WorkOrderAssets/testingAssets/2x4-banner-png-small.png",
            "thumbNailAlt": "vinyl banner",
            "quantity": 1,
            "components": [
                {
                    "id": 2884,
                    "name": "Vinyl Banner",
                    "quantityUnit": 1,
                    "description": "Roll Stock Prints",
                    "variableName": "Vinyl Banner",
                    "classTypeID": 10021,
                    "childComponents": [
                        {
                            "id": 2894,
                            "name": "Superprint 13oz Matte 38\" Roll sq",
                            "variableName": "Material",
                            "assemblyDataJSON": null,
                            "grandChildren": []
                        },
                        {
                            "id": 2895,
                            "name": "Vutek Qr3 RTR",
                            "variableName": "Machine",
                            "assemblyDataJSON": {
                                "itemHeight": 48,
                                "heightUnit": "in",
                                "itemWidth": 96,
                                "widthUnit": "in"
                            },
                            "grandChildren": [
                                {
                                    "id": 2896,
                                    "name": "Machine Time Detail",
                                    "variableName": "MachineTimeDetail"
                                },
                                {
                                    "id": 2897,
                                    "name": "Digital Press Ink - CMYK",
                                    "variableName": "ProductionMaterial1"
                                },
                                {
                                    "id": 2898,
                                    "name": "Print Labor",
                                    "variableName": "MachineLabor"
                                },
                                {
                                    "id": 2899,
                                    "name": "Layout",
                                    "variableName": "Layout"
                                }
                            ]
                        },
                        {
                            "id": 2885,
                            "name": "Finishing - Hemming -Weld",
                            "variableName": "DCG3[0]",
                            "assemblyDataJSON": null,
                            "grandChildren": [
                                {
                                    "id": 2886,
                                    "name": "Seaming Labor",
                                    "variableName": "FinishingLabor"
                                },
                                {
                                    "id": 2887,
                                    "name": "Miller Welder 112 Extreme",
                                    "variableName": "Machine"
                                }
                            ]
                        },
                        {
                            "id": 2889,
                            "name": "Finishing - Grommets",
                            "variableName": "DCG2[0]",
                            "assemblyDataJSON": null,
                            "grandChildren": [
                                {
                                    "id": 2890,
                                    "name": "#2 Grommet-Nickel Plated",
                                    "variableName": "Material"
                                },
                                {
                                    "id": 2891,
                                    "name": "Grommet Labor",
                                    "variableName": "FinishingLabor"
                                },
                                {
                                    "id": 2892,
                                    "name": "Edward Sequel Grommet Machine",
                                    "variableName": "Machine"
                                }
                            ]
                        }
                    ]
                }
            ],
            "assignedEmployees": [
                {
                    "id": 1413,
                    "role": "Entered By",
                    "employeeName": "Tom Ruff",
                    "employeeId": 1005
                },
                {
                    "id": 1414,
                    "role": "Assigned To",
                    "employeeName": "Brett Dykes",
                    "employeeId": 1006
                },
                {
                    "id": 1415,
                    "role": "Designer",
                    "employeeName": "Nici Earl",
                    "employeeId": 1018
                },
                {
                    "id": 1416,
                    "role": "Project Manager",
                    "employeeName": "Jessica Baker",
                    "employeeId": 1011
                }
            ]
        },
        {
            "id": 1107,
            "itemName": "Roll Stock Prints ",
            "itemNumber": 2,
            "description": "",
            "priceTotal": 88.17,
            "costMaterial": 10.87,
            "costLabor": 3.33,
            "costMachine": 8.12,
            "costTotal": 22.32,
            "thumbNailSrc": "https://identitysigns-x3-fai8o.your-cloudlab.com/media/.renditions/wysiwyg/IdentitySigns/WorkOrderAssets/testingAssets/lemonade-test-print.png",
            "thumbNailAlt": "print",
            "quantity": 5,
            "components": [
                {
                    "id": 2900,
                    "name": "Roll Stock Prints",
                    "quantityUnit": 1,
                    "description": "Roll Stock Prints",
                    "variableName": "Roll Stock Prints",
                    "classTypeID": 10021,
                    "childComponents": [
                        {
                            "id": 2901,
                            "name": "Vutek Qr3 RTR",
                            "variableName": "Machine",
                            "assemblyDataJSON": {
                                "itemHeight": 36,
                                "heightUnit": "in",
                                "itemWidth": 24,
                                "widthUnit": "in"
                            },
                            "grandChildren": [
                                {
                                    "id": 2902,
                                    "name": "Machine Time Detail",
                                    "variableName": "MachineTimeDetail"
                                },
                                {
                                    "id": 2903,
                                    "name": "Digital Press Ink - CMYK",
                                    "variableName": "ProductionMaterial1"
                                },
                                {
                                    "id": 2904,
                                    "name": "Print Labor",
                                    "variableName": "MachineLabor"
                                },
                                {
                                    "id": 2905,
                                    "name": "Layout",
                                    "variableName": "Layout"
                                }
                            ]
                        },
                        {
                            "id": 2912,
                            "name": "Sihl 3689 PostArt 6mil Outdoor Paper 54\" Roll",
                            "variableName": "Material",
                            "assemblyDataJSON": null,
                            "grandChildren": []
                        },
                        {
                            "id": 2906,
                            "name": "Roll Stock Print Cutting",
                            "variableName": "RollStockPrintCutting",
                            "assemblyDataJSON": {
                                "itemHeight": 0,
                                "heightUnit": null,
                                "itemWidth": 0,
                                "widthUnit": null
                            },
                            "grandChildren": [
                                {
                                    "id": 2907,
                                    "name": "Zund Cutter",
                                    "variableName": "Machine"
                                }
                            ]
                        }
                    ]
                }
            ],
            "assignedEmployees": [
                {
                    "id": 1417,
                    "role": "Entered By",
                    "employeeName": "Tom Ruff",
                    "employeeId": 1005
                },
                {
                    "id": 1419,
                    "role": "Assigned To",
                    "employeeName": "Tom Ruff",
                    "employeeId": 1005
                },
                {
                    "id": 1420,
                    "role": "Designer",
                    "employeeName": "Nici Earl",
                    "employeeId": 1018
                },
                {
                    "id": 1421,
                    "role": "Project Manager",
                    "employeeName": "Jessica Baker",
                    "employeeId": 1011
                }
            ]
        },
        {
            "id": 1109,
            "itemName": ".75\" Medium Density Fibreboard (MDF)",
            "itemNumber": 3,
            "description": "",
            "priceTotal": 361.07,
            "costMaterial": 73.57,
            "costLabor": 6.67,
            "costMachine": 6.55,
            "costTotal": 86.79,
            "thumbNailSrc": "https://identitysigns-x3-fai8o.your-cloudlab.com/media/.renditions/wysiwyg/IdentitySigns/WorkOrderAssets/testingAssets/11in_x_17in.png",
            "thumbNailAlt": "MDF print",
            "quantity": 1,
            "components": [
                {
                    "id": 2925,
                    "name": "Flat Stock Prints",
                    "quantityUnit": 1,
                    "description": "Flatbed Prints",
                    "variableName": null,
                    "classTypeID": 10021,
                    "childComponents": [
                        {
                            "id": 2926,
                            "name": "MDF - 1/2\" 48x96",
                            "variableName": "Material",
                            "assemblyDataJSON": null,
                            "grandChildren": []
                        },
                        {
                            "id": 2927,
                            "name": "Jeti Titan",
                            "variableName": "Machine",
                            "assemblyDataJSON": {
                                "itemHeight": 36,
                                "heightUnit": "in",
                                "itemWidth": 24,
                                "widthUnit": "in"
                            },
                            "grandChildren": [
                                {
                                    "id": 2928,
                                    "name": "Machine Time Detail",
                                    "variableName": "MachineTimeDetail"
                                },
                                {
                                    "id": 2929,
                                    "name": "Disposable Cost",
                                    "variableName": "DisposableMaterial"
                                },
                                {
                                    "id": 2930,
                                    "name": "Print Labor",
                                    "variableName": "MachineLabor"
                                },
                                {
                                    "id": 2931,
                                    "name": "Layout",
                                    "variableName": "Layout"
                                }
                            ]
                        },
                        {
                            "id": 2932,
                            "name": "Roll Lamination",
                            "variableName": "DCG5[0]",
                            "assemblyDataJSON": {
                                "itemHeight": 36,
                                "heightUnit": "in",
                                "itemWidth": 24,
                                "widthUnit": "in"
                            },
                            "grandChildren": [
                                {
                                    "id": 2933,
                                    "name": "EFI UltraClear Coat - Matte",
                                    "variableName": "Material"
                                },
                                {
                                    "id": 2934,
                                    "name": "Laminator AGL 64\"",
                                    "variableName": "Machine"
                                }
                            ]
                        }
                    ]
                }
            ],
            "assignedEmployees": [
                {
                    "id": 1423,
                    "role": "Entered By",
                    "employeeName": "Tom Ruff",
                    "employeeId": 1005
                }
            ]
        }
    ]
}
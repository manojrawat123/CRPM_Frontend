


const adminNav =
    [
        // Upper NavItems
        {
            "ID": 1,
            "MenuItemDescription": "Lead",
            "EndPoint": "dashboard",
            "Level": 0,
            "ParentID": null
        },
        {
            "ID": 3,
            "MenuItemDescription": "Menu",
            "EndPoint": "dashboard",
            "Level": 0,
            "ParentID": null
        },
        {
            "ID": 4,
            "MenuItemDescription": "SMSEmail",
            "EndPoint": "dashboard",
            "Level": 0,
            "ParentID": null
        },
        {
            "ID": 5,
            "MenuItemDescription": "Search",
            "EndPoint": "dashboard",
            "Level": 0,
            "ParentID": null
        },
        {
            "ID": 18,
            "MenuItemDescription": "Batches",
            "EndPoint": "dashboard",
            "Level": 0,
            "ParentID": null
        },
        {
            "ID": 19,
            "MenuItemDescription": "Payment",
            "EndPoint": "paymentdetails",
            "Level": 0,
            "ParentID": null
        },
        {
            "ID": 21,
            "MenuItemDescription": "Staff",
            "EndPoint": "staff",
            "Level": 0,
            "ParentID": null
        },
        {
            "ID": 31,
            "MenuItemDescription": "Lead Events",
            "EndPoint": "none",
            "Level": 0,
            "ParentID": null
        },
        // Lower NavItems
        {
            "ID": 2,
            "MenuItemDescription": "Add New Lead",
            "EndPoint": "dashboard",
            "Level": 1,
            "ParentID": 1
        },
        {
            "ID": 6,
            "MenuItemDescription": "Show All Lead",
            "EndPoint": "lead",
            "Level": 1,
            "ParentID": 1
        },
        {
            "ID": 9,
            "MenuItemDescription": "Pending Fees",
            "EndPoint": "pendingfees",
            "Level": 1,
            "ParentID": 3
        },
        {
            "ID": 10,
            "MenuItemDescription": "Registered Student",
            "EndPoint": "registeredstudent",
            "Level": 1,
            "ParentID": 3
        },
        {
            "ID": 11,
            "MenuItemDescription": "Fees Details",
            "EndPoint": "feesdetails",
            "Level": 1,
            "ParentID": 3
        },
        {
            "ID": 12,
            "MenuItemDescription": "Payment Details",
            "EndPoint": "paymentdetails",
            "Level": 1,
            "ParentID": 19
        },
        {
            "ID": 13,
            "MenuItemDescription": "Payment Link",
            "EndPoint": "paymentlink",
            "Level": 1,
            "ParentID": 19
        },
        {
            "ID": 14,
            "MenuItemDescription": "Add Staff",
            "EndPoint": "addstaff",
            "Level": 1,
            "ParentID": 21
        },
        {
            "ID": 15,
            "MenuItemDescription": "Batch Details",
            "EndPoint": "batch",
            "Level": 1,
            "ParentID": 18
        },
        {
            "ID": 16,
            "MenuItemDescription": "Assign Batch",
            "EndPoint": "assignbatch",
            "Level": 1,
            "ParentID": 18
        },
        {
            "ID": 22,
            "MenuItemDescription": "Today Call's",
            "EndPoint": "leadfollowup",
            "Level": 1,
            "ParentID": 1
        },
        {
            "ID": 23,
            "MenuItemDescription": "Shedule Email",
            "EndPoint": "emailshedule",
            "Level": 1,
            "ParentID": 4
        },
        {
            "ID": 24,
            "MenuItemDescription": "Send Message",
            "EndPoint": "message",
            "Level": 1,
            "ParentID": 4
        },
        {
            "ID": 25,
            "MenuItemDescription": "Staff Details",
            "EndPoint": "staffdetails",
            "Level": 1,
            "ParentID": 21
        },
        {
            "ID": 26,
            "MenuItemDescription": "Search",
            "EndPoint": "search",
            "Level": 1,
            "ParentID": 5
        },
        {
            "ID": 27,
            "MenuItemDescription": "Lead Analyst",
            "EndPoint": "leadanalytics",
            "Level": 1,
            "ParentID": 1
        },
        {
            "ID": 28,
            "MenuItemDescription": "Fees Taxes Details",
            "EndPoint": "fesstaxdetails",
            "Level": 1,
            "ParentID": 3
        },
        {
            "ID": 29,
            "MenuItemDescription": "Add Batch",
            "EndPoint": "createnewbatch",
            "Level": 1,
            "ParentID": 18
        },
        {
            "ID": 30,
            "MenuItemDescription": "Create Payment Link",
            "EndPoint": "createpaymentlink",
            "Level": 1,
            "ParentID": 19
        },
        {
            "ID": 32,
            "MenuItemDescription": "Visit Schedule",
            "EndPoint": "visitschedule",
            "Level": 1,
            "ParentID": 31
        },
        {
            "ID": 33,
            "MenuItemDescription": "Visit Happned",
            "EndPoint": "visithappned",
            "Level": 1,
            "ParentID": 31
        },
        {
            "ID": 34,
            "MenuItemDescription": "Demo Happned",
            "EndPoint": "demohappned",
            "Level": 1,
            "ParentID": 31
        },
        {
            "ID": 35,
            "MenuItemDescription": "Demo Schedule",
            "EndPoint": "demoschedule",
            "Level": 1,
            "ParentID": 31
        },
        {
            "ID": 36,
            "MenuItemDescription": "Refund Fees Details",
            "EndPoint": "refundfees",
            "Level": 1,
            "ParentID": 3
        },
        {
            "ID": 37,
            "MenuItemDescription": "Students Details & Update",
            "EndPoint": "customer_update_link",
            "Level": 1,
            "ParentID": 3
        }
    ]


const userNav = {

}

export { adminNav, userNav }
// --- 1. CONFIG ---
const firebaseConfig = {
  apiKey: "AIzaSyAVh2kVIuFcrt8Dg88emuEd9CQlqjJxDrA",
  authDomain: "zaffran-delight.firebaseapp.com",
  projectId: "zaffran-delight",
  storageBucket: "zaffran-delight.firebasestorage.app",
  messagingSenderId: "1022960860126",
  appId: "1:1022960860126:web:1e06693dea1d0247a0bb4f"
};

// --- MENU LIST FOR SEARCH ---
const MENU_ITEMS = [
    { name: "Tomatensuppe", price: 5.00 },
    { name: "Daal Linsensuppe", price: 5.00 },
    { name: "Hähnchen Suppe", price: 6.00 },
    { name: "Mulligatawny Suppe", price: 6.50 },
    { name: "Veg. Samosa", price: 5.00 },
    { name: "Chicken Samosa", price: 5.50 },
    { name: "Aloo Tiki", price: 5.00 },
    { name: "Mix Pakora", price: 5.50 },
    { name: "Paneer Pakora", price: 6.00 },
    { name: "Aloo Pakora", price: 5.50 },
    { name: "Gobi Pakora", price: 5.50 },
    { name: "Mashroom Pakora", price: 5.50 },
    { name: "Chicken Pakora", price: 6.00 },
    { name: "Prawn Pakora", price: 7.50 },
    { name: "Vegi Mix", price: 13.00 },
    { name: "Palak Aallu", price: 13.00 },
    { name: "Saag Aallu", price: 13.00 },
    { name: "Tarka Daal", price: 12.50 },
    { name: "Bhindi Masala", price: 13.00 },
    { name: "Baingen Aallu", price: 13.00 },
    { name: "Mushroom Aallu", price: 13.00 },
    { name: "Gobi Aallu", price: 13.00 },
    { name: "Channa Masala", price: 12.50 },
    { name: "Veg. Korma", price: 13.50 },
    { name: "Nauratan Korma", price: 14.00 },
    { name: "Shahi Paneer", price: 14.00 },
    { name: "Paneer Tikka Masala", price: 14.50 },
    { name: "Paneer Jalfrezi", price: 14.00 },
    { name: "Paneer Bhunna Masala", price: 14.00 },
    { name: "Palak Paneer", price: 14.00 },
    { name: "Paneer Muttar Aallu", price: 14.50 },
    { name: "Chicken Curry", price: 14.50 },
    { name: "Chicken Tikka Masala", price: 15.50 },
    { name: "Chicken Korma", price: 15.00 },
    { name: "Butter Chicken", price: 15.50 },
    { name: "Kashmiri Chicken", price: 15.50 },
    { name: "Chicken Goan Curry", price: 15.50 },
    { name: "Chicken Jalfrezi", price: 15.50 },
    { name: "Chicken Kadai", price: 15.50 },
    { name: "Chicken Bhuna", price: 15.50 },
    { name: "Vegi Chicken", price: 15.00 },
    { name: "Chicken Palak", price: 15.50 },
    { name: "Chicken Dhansik", price: 15.50 },
    { name: "Chicken Madras", price: 15.50 },
    { name: "Chicken Vindalo", price: 15.50 },
    { name: "Lamb Curry", price: 17.00 },
    { name: "Lamb Tikka Masala", price: 17.50 },
    { name: "Lamb Korma", price: 17.00 },
    { name: "Butter Lamb", price: 17.50 },
    { name: "Kashmiri Lamb", price: 17.50 },
    { name: "Lamb Goan Curry", price: 17.50 },
    { name: "Lamb Jalfrezi", price: 17.50 },
    { name: "Lamb Kadai", price: 17.50 },
    { name: "Lamb Bhuna", price: 17.50 },
    { name: "Vegi Lamb", price: 17.00 },
    { name: "Lamb Palak", price: 17.50 },
    { name: "Lamb Dhansik", price: 17.50 },
    { name: "Lamb Madras", price: 17.50 },
    { name: "Lamb Vindalo", price: 17.50 },
    { name: "Prawn Curry", price: 18.50 },
    { name: "Prawn Korma", price: 18.50 },
    { name: "Prawn Tikka Masala", price: 18.50 },
    { name: "Fish Curry", price: 18.50 },
    { name: "Fish Tikka Masala", price: 18.50 },
    { name: "Chicken Tikka", price: 17.50 },
    { name: "Tandoori Chicken", price: 17.50 },
    { name: "Malai Tikka", price: 17.50 },
    { name: "Haryali Tikka", price: 17.50 },
    { name: "Lamb Tikka", price: 18.50 },
    { name: "Lamb Chops", price: 20.50 },
    { name: "Seekh Kabab", price: 19.50 },
    { name: "Prawn Tikka", price: 20.50 },
    { name: "Paneer Tikka", price: 17.50 },
    { name: "Fish Tawa Fry", price: 20.50 },
    { name: "Zafrani Mix Grill", price: 24.00 },
    { name: "Vegi Biryani", price: 14.50 },
    { name: "Chicken Bombay Biryani", price: 16.50 },
    { name: "Lamb Karachi Biryani", price: 17.50 },
    { name: "Prawn Zafran Biryani", price: 20.50 },
    { name: "Frisches Tandoori Brot", price: 3.50 },
    { name: "Chapati Roti", price: 3.50 },
    { name: "Naan", price: 3.00 },
    { name: "Allo Naan", price: 4.50 },
    { name: "Cheese Naan", price: 5.00 },
    { name: "Butter Naan", price: 3.50 },
    { name: "Garlic Naan", price: 4.50 },
    { name: "Tandoori Parantha", price: 4.50 },
    { name: "Mint Sauce", price: 3.00 },
    { name: "Natur Joghurt", price: 2.50 },
    { name: "Raita", price: 4.00 },
    { name: "Mango Chutney", price: 3.00 },
    { name: "Imli (Tamarind) Chutney", price: 3.00 },
    { name: "Laal Chutney (scharfe...)", price: 3.50 },
    { name: "Green Chutney", price: 3.50 },
    { name: "Pickles", price: 3.50 },
    { name: "Soße nach Wahl", price: 5.00 },
    { name: "Gemüse-Frühlingsrollen", price: 5.00 },
    { name: "Pommes frites", price: 3.50 },
    { name: "Chicken Nuggets (6 Stk.)", price: 4.50 },
    { name: "Basmati - Reis", price: 3.50 },
    { name: "Zeera - Reis", price: 4.00 },
    { name: "Zafrani - Reis", price: 5.50 },
    { name: "Gemischter Salat", price: 6.00 },
    { name: "Chicken Salat", price: 7.50 },
    { name: "Zafrani Chicken Salat", price: 8.50 },
    { name: "Mango Kulfi", price: 5.50 },
    { name: "Almond Kulfi", price: 5.50 },
    { name: "Pista Kulfi", price: 5.50 },
    { name: "Gulab Jamun", price: 5.50 },
    { name: "Ras Malai", price: 5.50 },
    { name: "Lassi", price: 4.00 },
    { name: "Mango Lassi", price: 4.50 },
    { name: "Rosé Lassi", price: 4.50 },
    { name: "Coca Cola", price: 3.50 },
    { name: "Cola Zero", price: 3.50 },
    { name: "Sprite", price: 3.50 },
    { name: "Fanta", price: 3.50 },
    { name: "Pinacolada", price: 5.50 },
    { name: "Mint-Margarita", price: 5.50 },
    { name: "Ipanema", price: 5.50 }
];

function getDishNumber(name) {
    const index = MENU_ITEMS.findIndex(item => item.name === name);
    return index !== -1 ? ` - ${index + 1}` : "";
}

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// --- 2. GLOBAL STATE ---
let activeBillOrders = []; 
let currentSelectedTable = null; 
const BILLING_PASSWORD = "zafran"; 
let selectedMenuItem = null; 

// --- DISCOUNT STATE ---
let currentSubtotal = 0;
let currentDiscountVal = 0;
let currentDiscountType = 'percent'; 

document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const loginOverlay = document.getElementById('billing-login-overlay');
    const loginButton = document.getElementById('login-button');
    const passwordInput = document.getElementById('billing-password');
    const loginError = document.getElementById('login-error');
    const contentWrapper = document.getElementById('billing-content-wrapper');
    const statusDot = document.getElementById('status-dot');
    const connectionText = document.getElementById('connection-text');
    
    const billingListEl = document.getElementById('billing-list');
    const activeBillsCountEl = document.getElementById('active-bills-count');
    const pendingAmountEl = document.getElementById('pending-amount');

    // Panel Elements
    const detailPanel = document.getElementById('detailPanel');
    const panelTitle = document.getElementById('panel-title');
    const panelItemsList = document.getElementById('bill-items-list');
    
    // Totals Elements
    const panelSubtotalEl = document.getElementById('panel-subtotal');
    const panelDiscountRow = document.getElementById('discount-display-row');
    const panelDiscountEl = document.getElementById('panel-discount');
    const panelTotalEl = document.getElementById('panel-total');

    // Discount Inputs
    const discountInput = document.getElementById('discount-val');
    const discountTypeSelect = document.getElementById('discount-type');

    // Manual Item
    const menuSearchInput = document.getElementById('billing-menu-search');
    const menuDropdown = document.getElementById('billing-menu-list');
    const manualQty = document.getElementById('manual-qty');
    const manualPrice = document.getElementById('manual-price');
    const manualAddBtn = document.getElementById('manual-add-btn');

    // New Bill
    const newBillModal = document.getElementById('new-bill-modal');
    const newBillInput = document.getElementById('new-bill-identifier');

    // Login
    if(loginButton) {
        loginButton.addEventListener('click', () => {
            if (passwordInput.value === BILLING_PASSWORD) {
                loginOverlay.style.display = 'none';
                contentWrapper.style.opacity = '1'; 
                statusDot.classList.add('online');
                connectionText.textContent = "System Online";
                initializeBilling(); 
            } else {
                loginError.style.display = 'block';
            }
        });
        passwordInput.addEventListener('keyup', (e) => e.key === 'Enter' && loginButton.click());
    }

    function initializeBilling() {
        // LISTENER: ONLY 'billing' status
        db.collection("orders")
          .where("status", "==", "billing") 
          .onSnapshot(
            (snapshot) => {
                activeBillOrders = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
                renderBillingTable();
                updateKPIs();
                // Refresh panel if open
                if (currentSelectedTable) {
                    openBillPanel(currentSelectedTable, false);
                } else {
                    closePanel();
                }
            },
            (error) => {
                console.error("Error:", error);
                connectionText.textContent = "Offline";
                statusDot.classList.remove('online');
            }
        );

        // --- SEARCH LOGIC ---
        if(menuSearchInput) {
            menuSearchInput.addEventListener('input', (e) => {
                selectedMenuItem = null; 
                manualPrice.value = ""; 
                const query = e.target.value.toLowerCase();
                if(query.length === 0) { menuDropdown.classList.remove('show'); return; }
                const filtered = MENU_ITEMS.filter((item, index) => {
                    const num = (index + 1).toString();
                    return item.name.toLowerCase().includes(query) || num.includes(query);
                });
                renderDropdown(filtered);
            });
        }

        document.addEventListener('click', (e) => {
            if(menuDropdown && !e.target.closest('.billing-search-box')) { menuDropdown.classList.remove('show'); }
        });

        // --- DISCOUNT LISTENERS ---
        if(discountInput) discountInput.addEventListener('input', updateTotalsDisplay);
        if(discountTypeSelect) discountTypeSelect.addEventListener('change', updateTotalsDisplay);

        // --- MANUAL ADD ---
        if(manualAddBtn) {
            manualAddBtn.addEventListener('click', async () => {
                if(!currentSelectedTable) { alert("No active bill selected."); return; }
                if (!selectedMenuItem) { alert("Please select an item from the search list."); return; }
                
                const name = selectedMenuItem.name; 
                const price = selectedMenuItem.price;
                const qty = parseInt(manualQty.value) || 1; // Default to 1 if empty
                
                if(qty < 1) { alert("Invalid quantity."); return; }
                
                const newId = `${currentSelectedTable}-manual-${Date.now()}`;
                const existing = activeBillOrders.find(o => o.table === currentSelectedTable);
                
                const newItem = {
                    id: newId,
                    table: currentSelectedTable,
                    items: [{ name, quantity: qty, price }],
                    status: "billing",
                    createdAt: new Date(),
                    orderType: existing ? existing.orderType : 'dine-in',
                    customerName: existing ? existing.customerName : currentSelectedTable,
                    isManual: true
                };
                
                try {
                    manualAddBtn.disabled = true;
                    manualAddBtn.innerText = "Adding...";
                    await db.collection("orders").doc(newId).set(newItem);
                    
                    menuSearchInput.value = ""; 
                    manualQty.value = "1";
                    manualPrice.value = "";
                    selectedMenuItem = null;
                    menuDropdown.classList.remove('show');
                } catch(e) { console.error(e); alert("Failed to add item. Check console."); } 
                finally { manualAddBtn.disabled = false; manualAddBtn.innerText = "ADD"; }
            });
        }
    }

    function renderDropdown(items) {
        if(!menuDropdown) return;
        menuDropdown.innerHTML = "";
        if(items.length === 0) { menuDropdown.classList.remove('show'); return; }
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'billing-menu-item';
            div.innerHTML = `<span>${item.name} <strong style="color:var(--gold);">${getDishNumber(item.name)}</strong></span><span>${item.price.toFixed(2)} €</span>`;
            div.addEventListener('click', () => {
                selectedMenuItem = item;
                menuSearchInput.value = item.name;
                manualPrice.value = item.price.toFixed(2);
                manualQty.value = "1";
                menuDropdown.classList.remove('show');
            });
            menuDropdown.appendChild(div);
        });
        menuDropdown.classList.add('show');
    }

    function updateKPIs() {
        const uniqueTables = [...new Set(activeBillOrders.map(o => o.table))];
        if(activeBillsCountEl) activeBillsCountEl.textContent = uniqueTables.length;
        let total = 0;
        activeBillOrders.forEach(o => {
            if(o.items && Array.isArray(o.items)) {
                o.items.forEach(i => total += (i.price * i.quantity));
            }
        });
        if(pendingAmountEl) pendingAmountEl.textContent = total.toFixed(2) + " €";
    }

    function renderBillingTable() {
        if(!billingListEl) return;
        billingListEl.innerHTML = "";
        const uniqueTables = [...new Set(activeBillOrders.map(o => o.table))];
        if (uniqueTables.length === 0) {
            billingListEl.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:30px; color:#666;">No active bills.</td></tr>`;
            return;
        }
        uniqueTables.sort();
        uniqueTables.forEach(table => {
            const orders = activeBillOrders.filter(o => o.table === table);
            let tableTotal = 0;
            let type = "Dine-In";
            let earliestTime = new Date();
            let customerName = `Table ${table}`;
            let isManualBill = orders.some(o => o.isManualBill === true);

            orders.forEach(o => {
                if(o.items && Array.isArray(o.items)) {
                    o.items.forEach(i => tableTotal += (i.price * i.quantity));
                }
                if(o.orderType === 'pickup') { type = "Pickup"; customerName = o.customerName; }
                if(o.orderType === 'delivery') { type = "Delivery"; customerName = o.customerName; }
                
                if(o.billRequestedAt && o.billRequestedAt.toDate) {
                     if(o.billRequestedAt.toDate() < earliestTime) earliestTime = o.billRequestedAt.toDate();
                } else if(o.createdAt && o.createdAt.toDate) {
                     if(o.createdAt.toDate() < earliestTime) earliestTime = o.createdAt.toDate();
                }
            });
            const minsAgo = Math.floor((new Date() - earliestTime) / 60000);
            let badgeClass = type === 'Pickup' ? 'badge-pickup' : (type === 'Delivery' ? 'badge-delivery' : 'badge-dinein');
            if(isManualBill) { badgeClass = 'badge-manual'; type = "Manual"; }

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td style="font-weight:bold; color:white;">${customerName}</td>
                <td>${minsAgo} mins ago</td>
                <td><span class="badge ${badgeClass}">${type}</span></td>
                <td style="text-align:right; font-family:monospace; color:var(--gold); font-size:1.1rem;">${tableTotal.toFixed(2)} €</td>
                <td style="text-align:center;">
                    <button class="btn-action btn-print" style="padding:5px 10px; font-size:0.8rem;" onclick="openBillPanel('${table}', true)">Review</button>
                </td>
            `;
            billingListEl.appendChild(tr);
        });
    }

    // --- PANEL LOGIC ---
    window.openBillPanel = function(tableId, resetDiscount = false) {
        currentSelectedTable = tableId;
        const orders = activeBillOrders.filter(o => o.table === tableId);
        if(orders.length === 0) { closePanel(); return; }

        let isPickup = orders.some(o => o.orderType === 'pickup' || o.orderType === 'delivery');
        let title = isPickup ? orders[0].customerName : `Table ${tableId}`;
        panelTitle.textContent = title;

        panelItemsList.innerHTML = "";
        currentSubtotal = 0;

        orders.forEach(order => {
            if(order.items && Array.isArray(order.items)) {
                order.items.forEach(item => {
                    const itemTotal = item.price * item.quantity;
                    currentSubtotal += itemTotal;
                    const div = document.createElement('div');
                    div.className = 'receipt-item';
                    div.innerHTML = `
                        <span>${item.quantity}x ${item.name}</span>
                        <span>${itemTotal.toFixed(2)} €</span>
                    `;
                    panelItemsList.appendChild(div);
                });
            }
        });

        if(resetDiscount) {
            if(discountInput) discountInput.value = "";
            currentDiscountVal = 0;
            currentDiscountType = 'percent';
        }

        updateTotalsDisplay();
        detailPanel.classList.add('open');
    }

    window.closePanel = function() {
        detailPanel.classList.remove('open');
        currentSelectedTable = null;
    }

    function updateTotalsDisplay() {
        if(!discountInput) return;
        const val = parseFloat(discountInput.value) || 0;
        const type = discountTypeSelect ? discountTypeSelect.value : 'percent';
        currentDiscountVal = val;
        currentDiscountType = type;

        let discountAmt = 0;
        if(type === 'percent') {
            discountAmt = currentSubtotal * (val / 100);
        } else {
            discountAmt = val;
        }

        if(discountAmt > currentSubtotal) discountAmt = currentSubtotal;

        const finalTotal = currentSubtotal - discountAmt;

        if(panelSubtotalEl) panelSubtotalEl.textContent = currentSubtotal.toFixed(2) + " €";
        if(panelTotalEl) panelTotalEl.textContent = finalTotal.toFixed(2) + " €";
        
        if(panelDiscountRow && panelDiscountEl) {
            if(discountAmt > 0) {
                panelDiscountRow.style.display = 'flex';
                panelDiscountEl.textContent = "- " + discountAmt.toFixed(2) + " €";
            } else {
                panelDiscountRow.style.display = 'none';
            }
        }
    }

    // --- NEW BILL LOGIC ---
    window.showNewBillModal = function() {
        if(newBillModal) {
            newBillInput.value = "";
            newBillModal.classList.remove('hidden');
            newBillInput.focus();
        }
    }

    window.createNewBill = async function() {
        const identifier = newBillInput.value.trim();
        if(!identifier) { alert("Please enter a Table Number or Name"); return; }
        if(activeBillOrders.some(o => o.table === identifier)) { alert("Bill already exists!"); return; }

        const newId = `${identifier}-init-${Date.now()}`;
        const newBillDoc = {
            id: newId,
            table: identifier,
            items: [], 
            status: "billing",
            createdAt: new Date(),
            billRequestedAt: new Date(),
            orderType: 'dine-in',
            customerName: identifier,
            isManualBill: true
        };
        try {
            await db.collection("orders").doc(newId).set(newBillDoc);
            newBillModal.classList.add('hidden');
            currentSelectedTable = identifier; 
        } catch(e) { console.error(e); alert("Error creating bill"); }
    }

    // --- ACTIONS ---
    window.handlePrintAndClose = async function() {
        if(!currentSelectedTable) return;
        generateReceiptHTML(currentSelectedTable);
        
        // Small delay to ensure content is rendered in DOM
        setTimeout(() => {
            window.print(); 
            setTimeout(async () => {
                if(confirm("Confirm: Receipt printed & Payment received?")) {
                    await archiveCurrentBill(true);
                }
            }, 500);
        }, 300);
    }

    window.handleReprint = function() {
        if(!currentSelectedTable) return;
        generateReceiptHTML(currentSelectedTable);
        setTimeout(() => { window.print(); }, 300);
    }

    window.handlePaidAndClose = async function() {
        if(!currentSelectedTable) return;
        if(confirm("Close bill without printing?")) {
            await archiveCurrentBill(true);
        }
    }

    window.handleCancel = async function() {
        if(!currentSelectedTable) return;
        if(confirm("Cancel billing request? This will send orders back to the Waiter.")) {
            const orders = activeBillOrders.filter(o => o.table === currentSelectedTable);
            const batch = db.batch();
            orders.forEach(o => {
                const ref = db.collection("orders").doc(o.id);
                if(o.isManualBill && (!o.items || o.items.length === 0)) { batch.delete(ref); } 
                else { batch.update(ref, { status: "cooked" }); }
            });
            await batch.commit();
            closePanel();
        }
    }

    async function archiveCurrentBill(markPaid) {
        const orders = activeBillOrders.filter(o => o.table === currentSelectedTable);
        
        let discountAmt = 0;
        if(currentDiscountType === 'percent') discountAmt = currentSubtotal * (currentDiscountVal / 100);
        else discountAmt = currentDiscountVal;
        if(discountAmt > currentSubtotal) discountAmt = currentSubtotal;
        const finalTotal = currentSubtotal - discountAmt;

        const archiveId = `archive-${Date.now()}`;
        let allItems = [];
        let type = 'dine-in';
        let custName = currentSelectedTable;

        orders.forEach(o => {
            if(o.items) allItems.push(...o.items);
            if(o.orderType) type = o.orderType;
            if(o.customerName) custName = o.customerName;
        });

        const archiveDoc = {
            table: currentSelectedTable,
            items: allItems,
            subtotal: currentSubtotal,
            discountValue: currentDiscountVal,
            discountType: currentDiscountType,
            discountAmount: discountAmt,
            total: finalTotal,
            paidAmount: finalTotal,
            closedAt: new Date(),
            orderType: type,
            customerName: custName
        };

        try {
            const batch = db.batch();
            const archiveRef = db.collection("archived_orders").doc(archiveId);
            batch.set(archiveRef, archiveDoc);
            orders.forEach(o => {
                const ref = db.collection("orders").doc(o.id);
                batch.delete(ref);
            });
            await batch.commit();
            closePanel();
        } catch(e) { console.error("Archive Error", e); alert("Error closing bill"); }
    }

    function generateReceiptHTML(tableId) {
        const orders = activeBillOrders.filter(o => o.table === tableId);
        const container = document.getElementById('receipt-print-area');
        const dateStr = new Date().toLocaleString('de-DE');

        let itemsHtml = "";
        orders.forEach(o => {
            if(o.items && Array.isArray(o.items)) {
                o.items.forEach(i => {
                    itemsHtml += `
                        <div class="print-row">
                            <span>${i.quantity} x ${i.name}</span>
                            <span>${(i.price * i.quantity).toFixed(2)}</span>
                        </div>
                    `;
                });
            }
        });

        let discountAmt = 0;
        if(currentDiscountType === 'percent') discountAmt = currentSubtotal * (currentDiscountVal / 100);
        else discountAmt = currentDiscountVal;
        if(discountAmt > currentSubtotal) discountAmt = currentSubtotal;
        const finalTotal = currentSubtotal - discountAmt;
        const netTotal = finalTotal / 1.07; // Approx Net for 7% VAT
        const taxTotal = finalTotal - netTotal;

        let discountHtml = "";
        if(discountAmt > 0) {
            discountHtml = `
            <div class="print-row">
                <span>Zwischensumme</span>
                <span>${currentSubtotal.toFixed(2)}</span>
            </div>
            <div class="print-row">
                <span>Rabatt (${currentDiscountType === 'percent' ? currentDiscountVal + '%' : 'Fix'})</span>
                <span>- ${discountAmt.toFixed(2)}</span>
            </div>
            <div class="print-divider"></div>`;
        } else {
             discountHtml = `<div class="print-divider"></div>`;
        }

        container.innerHTML = `
            <div id="receipt-container">
                <div class="print-header">
                    <img src="logo.png" class="print-logo" alt="Zaffran"><br>
                    <span class="print-bold">Zaffran Delight</span><br>
                    Kessenicher Str. 9, 53879 Euskirchen<br>
                    Tel: 02251 1290950<br>
                    Steuer-Nr: 123/456/7890
                </div>
                <div class="print-divider"></div>
                <div class="print-row">
                    <span>Tisch: ${tableId}</span>
                    <span>${dateStr}</span>
                </div>
                <div class="print-divider"></div>
                
                ${itemsHtml}
                
                ${discountHtml}
                
                <div class="print-row print-bold" style="font-size:14px; margin-top:5px;">
                    <span>GESAMT (EUR)</span>
                    <span>${finalTotal.toFixed(2)}</span>
                </div>
                
                <div class="print-divider"></div>
                
                <div class="print-row" style="font-size:10px;">
                    <span>Netto</span>
                    <span>${netTotal.toFixed(2)}</span>
                </div>
                <div class="print-row" style="font-size:10px;">
                    <span>MwSt (7% inkl.)</span>
                    <span>${taxTotal.toFixed(2)}</span>
                </div>

                <div class="print-footer">
                    Vielen Dank für Ihren Besuch!<br>
                    Es gilt deutsches Recht.
                </div>
            </div>
        `;
    }
});

// --- 1. CONFIGURATION ---
const firebaseConfig = {
  apiKey: "AIzaSyAVh2kVIuFcrt8Dg88emuEd9CQlqjJxDrA",
  authDomain: "zaffran-delight.firebaseapp.com",
  projectId: "zaffran-delight",
  storageBucket: "zaffran-delight.firebasestorage.app",
  messagingSenderId: "1022960860126",
  appId: "1:1022960860126:web:1e06693dea1d0247a0bb4f"
};

// --- MASTER MENU LIST (For Numbering) ---
const MENU_ITEMS = [
    { name: "Tomatensuppe", price: 5.00 }, { name: "Daal Linsensuppe", price: 5.00 }, { name: "Hähnchen Suppe", price: 6.00 }, { name: "Mulligatawny Suppe", price: 6.50 },
    { name: "Veg. Samosa", price: 5.00 }, { name: "Chicken Samosa", price: 5.50 }, { name: "Aloo Tiki", price: 5.00 }, { name: "Mix Pakora", price: 5.50 }, { name: "Paneer Pakora", price: 6.00 }, { name: "Aloo Pakora", price: 5.50 },
    { name: "Gobi Pakora", price: 5.50 }, { name: "Mashroom Pakora", price: 5.50 }, { name: "Chicken Pakora", price: 6.00 }, { name: "Prawn Pakora", price: 7.50 },
    { name: "Vegi Mix", price: 13.00 }, { name: "Palak Aallu", price: 13.00 }, { name: "Saag Aallu", price: 13.00 }, { name: "Tarka Daal", price: 12.50 }, { name: "Bhindi Masala", price: 13.00 }, { name: "Baingen Aallu", price: 13.00 },
    { name: "Mushroom Aallu", price: 13.00 }, { name: "Gobi Aallu", price: 13.00 }, { name: "Channa Masala", price: 12.50 },
    { name: "Veg. Korma", price: 13.50 }, { name: "Nauratan Korma", price: 14.00 }, { name: "Shahi Paneer", price: 14.00 }, { name: "Paneer Tikka Masala", price: 14.50 }, { name: "Paneer Jalfrezi", price: 14.00 }, { name: "Paneer Bhunna Masala", price: 14.00 }, { name: "Palak Paneer", price: 14.00 }, { name: "Paneer Muttar Aallu", price: 14.50 },
    { name: "Chicken Curry", price: 14.50 }, { name: "Chicken Tikka Masala", price: 15.50 }, { name: "Chicken Korma", price: 15.00 }, { name: "Butter Chicken", price: 15.50 }, { name: "Kashmiri Chicken", price: 15.50 }, { name: "Chicken Goan Curry", price: 15.50 }, { name: "Chicken Jalfrezi", price: 15.50 }, { name: "Chicken Kadai", price: 15.50 }, { name: "Chicken Bhuna", price: 15.50 }, { name: "Vegi Chicken", price: 15.00 }, { name: "Chicken Palak", price: 15.50 }, { name: "Chicken Dhansik", price: 15.50 }, { name: "Chicken Madras", price: 15.50 }, { name: "Chicken Vindalo", price: 15.50 },
    { name: "Lamb Curry", price: 17.00 }, { name: "Lamb Tikka Masala", price: 17.50 }, { name: "Lamb Korma", price: 17.00 }, { name: "Butter Lamb", price: 17.50 }, { name: "Kashmiri Lamb", price: 17.50 }, { name: "Lamb Goan Curry", price: 17.50 }, { name: "Lamb Jalfrezi", price: 17.50 }, { name: "Lamb Kadai", price: 17.50 }, { name: "Lamb Bhuna", price: 17.50 }, { name: "Vegi Lamb", price: 17.00 }, { name: "Lamb Palak", price: 17.50 }, { name: "Lamb Dhansik", price: 17.50 }, { name: "Lamb Madras", price: 17.50 }, { name: "Lamb Vindalo", price: 17.50 },
    { name: "Prawn Curry", price: 18.50 }, { name: "Prawn Korma", price: 18.50 }, { name: "Prawn Tikka Masala", price: 18.50 }, { name: "Fish Curry", price: 18.50 }, { name: "Fish Tikka Masala", price: 18.50 },
    { name: "Chicken Tikka", price: 17.50 }, { name: "Tandoori Chicken", price: 17.50 }, { name: "Malai Tikka", price: 17.50 }, { name: "Haryali Tikka", price: 17.50 }, { name: "Lamb Tikka", price: 18.50 }, { name: "Lamb Chops", price: 20.50 }, { name: "Seekh Kabab", price: 19.50 }, { name: "Prawn Tikka", price: 20.50 }, { name: "Paneer Tikka", price: 17.50 }, { name: "Fish Tawa Fry", price: 20.50 }, { name: "Zafrani Mix Grill", price: 24.00 },
    { name: "Vegi Biryani", price: 14.50 }, { name: "Chicken Bombay Biryani", price: 16.50 }, { name: "Lamb Karachi Biryani", price: 17.50 }, { name: "Prawn Zafran Biryani", price: 20.50 },
    { name: "Frisches Tandoori Brot", price: 3.50 }, { name: "Chapati Roti", price: 3.50 }, { name: "Naan", price: 3.00 }, { name: "Allo Naan", price: 4.50 }, { name: "Cheese Naan", price: 5.00 }, { name: "Butter Naan", price: 3.50 }, { name: "Garlic Naan", price: 4.50 }, { name: "Tandoori Parantha", price: 4.50 },
    { name: "Mint Sauce", price: 3.00 }, { name: "Natur Joghurt", price: 2.50 }, { name: "Raita", price: 4.00 }, { name: "Mango Chutney", price: 3.00 }, { name: "Imli (Tamarind) Chutney", price: 3.00 }, { name: "Laal Chutney (scharfe...)", price: 3.50 }, { name: "Green Chutney", price: 3.50 }, { name: "Pickles", price: 3.50 }, { name: "Soße nach Wahl", price: 5.00 },
    { name: "Gemüse-Frühlingsrollen", price: 5.00 }, { name: "Pommes frites", price: 3.50 }, { name: "Chicken Nuggets (6 Stk.)", price: 4.50 },
    { name: "Basmati - Reis", price: 3.50 }, { name: "Zeera - Reis", price: 4.00 }, { name: "Zafrani - Reis", price: 5.50 },
    { name: "Gemischter Salat", price: 6.00 }, { name: "Chicken Salat", price: 7.50 }, { name: "Zafrani Chicken Salat", price: 8.50 },
    { name: "Mango Kulfi", price: 5.50 }, { name: "Almond Kulfi", price: 5.50 }, { name: "Pista Kulfi", price: 5.50 }, { name: "Gulab Jamun", price: 5.50 }, { name: "Ras Malai", price: 5.50 },
    { name: "Lassi", price: 4.00 }, { name: "Mango Lassi", price: 4.50 }, { name: "Rosé Lassi", price: 4.50 }, { name: "Coca Cola", price: 3.50 }, { name: "Cola Zero", price: 3.50 }, { name: "Sprite", price: 3.50 }, { name: "Fanta", price: 3.50 }, { name: "Pinacolada", price: 5.50 }, { name: "Mint-Margarita", price: 5.50 }, { name: "Ipanema", price: 5.50 }
];

function getDishNumber(name) {
    const index = MENU_ITEMS.findIndex(item => item.name === name);
    return index !== -1 ? ` - ${index + 1}` : ""; 
}

// --- 2. INIT FIREBASE ---
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// --- 3. DOM ELEMENTS ---
const connectionIconEl = document.getElementById('connection-icon');
const loginOverlay = document.getElementById('kitchen-login-overlay');
const loginButton = document.getElementById('login-button');
const passwordInput = document.getElementById('kitchen-password');
const loginError = document.getElementById('login-error');

// Columns
const colDineIn = document.getElementById('list-dinein');
const colPickup = document.getElementById('list-pickup');
const colDelivery = document.getElementById('list-delivery');

// Popups & Controls
const newOrderPopup = document.getElementById('new-order-popup-overlay');
const popupOrderDetails = document.getElementById('popup-order-details');
const acceptOrderBtn = document.getElementById('accept-order-btn');
const masterClearBtn = document.getElementById('master-clear-btn');

// Waiter Call
const waiterCallOverlay = document.getElementById('waiter-call-overlay');
const waiterCallTableText = document.getElementById('waiter-call-table');
const dismissWaiterBtn = document.getElementById('dismiss-waiter-btn');
let currentWaiterCallId = null;

// Audio
const alertAudio = document.getElementById('alertSound');
const KITCHEN_PASSWORD = "zafran"; 
let allOrders = {};
let newOrderQueue = []; 

// --- 4. LOGIN LOGIC ---
document.addEventListener("DOMContentLoaded", () => {
    loginButton.addEventListener('click', () => {
        if (passwordInput.value === KITCHEN_PASSWORD) {
            loginOverlay.classList.add('hidden');
            
            // Unlock Audio
            alertAudio.play().then(() => {
                alertAudio.pause();
                alertAudio.currentTime = 0;
            }).catch(e => console.log("Audio Init:", e));

            initializeKDS(); 
        } else {
            loginError.style.display = 'block';
        }
    });
    passwordInput.addEventListener('keyup', (e) => e.key === 'Enter' && loginButton.click());
});

// --- 5. INITIALIZE KDS ---
function initializeKDS() {
    // Listen for MASTER CLEAR Button
    if(masterClearBtn) {
        masterClearBtn.addEventListener('click', handleMasterClear);
    }

    // START LISTENER
    db.collection("orders")
      .where("status", "in", ["new", "seen", "ready", "cooked"]) 
      .onSnapshot((snapshot) => {
            if(connectionIconEl) connectionIconEl.textContent = 'System Online'; 
            
            // Clear Columns
            colDineIn.innerHTML = '';
            colPickup.innerHTML = '';
            colDelivery.innerHTML = '';

            snapshot.docChanges().forEach((change) => {
                const orderData = change.doc.data();
                
                // Waiter Call
                if (orderData.orderType === 'assistance') {
                    if (change.type === "added") showWaiterCall(orderData.table, change.doc.id);
                    if (change.type === "removed" && currentWaiterCallId === change.doc.id) waiterCallOverlay.classList.add('hidden');
                    return;
                }

                // New Order -> Add to Queue
                if (change.type === "added" && orderData.status === "new") {
                    if (!newOrderQueue.find(o => o.id === orderData.id)) {
                        newOrderQueue.push(orderData);
                        newOrderQueue.sort((a, b) => a.createdAt - b.createdAt);
                        processNewOrderQueue(); 
                    }
                }
            });

            // Populate active orders
            const allDocs = [];
            snapshot.forEach(doc => allDocs.push({id: doc.id, ...doc.data()}));
            allDocs.sort((a, b) => (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0));

            allOrders = {};
            allDocs.forEach(order => {
                if(order.orderType === 'assistance') return;
                allOrders[order.id] = order;
                createOrderCard(order);
            });

      }, (error) => {
          console.error("Firebase Error:", error);
          if(connectionIconEl) connectionIconEl.textContent = 'Offline'; 
      });
}

function createOrderCard(order) {
    const time = order.createdAt?.toDate().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) || '--:--';
    const isReady = order.status === 'ready' || order.status === 'cooked';
    
    // Determine Target Column & Styles
    let targetCol = colDineIn;
    let badgeColor = "var(--gold)";
    let title = `Table ${order.table}`;
    let subInfo = "";

    if (order.orderType === 'pickup') {
        targetCol = colPickup;
        badgeColor = "#3498db";
        title = order.customerName || "Customer";
        subInfo = order.timeSlot ? `Target: ${order.timeSlot}` : "";
    } 
    else if (order.orderType === 'delivery') {
        targetCol = colDelivery;
        badgeColor = "#e67e22";
        title = order.customerName || "Customer";
        subInfo = order.deliveryAddress ? `📍 ${order.deliveryAddress.street}` : "";
    }

    // Build Item List
    let itemsHtml = "";
    if(order.items && Array.isArray(order.items)) {
        itemsHtml = order.items.map(item => `
            <div class="kitchen-item">
                <span>
                    <span class="item-qty">${item.quantity}x</span>
                    ${item.name} <strong>${getDishNumber(item.name)}</strong>
                </span>
            </div>
        `).join('');
    }

    // Styles for Card
    const borderColor = isReady ? '#444' : badgeColor;
    const opacity = isReady ? '0.6' : '1';
    const btnText = isReady ? "Undo / Active" : "MARK READY";
    const btnClass = isReady ? "btn-done" : "btn-ready";

    // Card HTML
    const cardHtml = `
        <div class="order-card" style="border-top: 3px solid ${borderColor}; opacity: ${opacity};">
            <div class="card-header">
                <span class="card-title">${title}</span>
                <span class="card-time">${time}</span>
            </div>
            <div class="card-body">
                ${subInfo ? `<div style="color:${badgeColor}; font-weight:bold; margin-bottom:10px;">${subInfo}</div>` : ''}
                ${itemsHtml}
                ${order.notes ? `<div class="card-note">📝 "${order.notes}"</div>` : ''}
            </div>
            <div class="card-footer">
                <button class="btn-action ${btnClass}" onclick="handleServe('${order.id}')">
                    ${isReady ? '✅ READY' : 'MARK READY'}
                </button>
            </div>
        </div>
    `;

    // Append to correct column
    targetCol.insertAdjacentHTML('beforeend', cardHtml);
}

// --- QUEUE & POPUP LOGIC ---
function processNewOrderQueue() {
    if (newOrderQueue.length === 0) {
        newOrderPopup.classList.add('hidden');
        alertAudio.loop = false;
        alertAudio.pause();
        alertAudio.currentTime = 0;
        return;
    }

    const currentOrder = newOrderQueue[0];
    alertAudio.loop = true;
    alertAudio.play().catch(e => console.log(e));

    let title = "";
    if (currentOrder.orderType === 'pickup') title = `🛍️ Pickup: ${currentOrder.customerName}`;
    else if (currentOrder.orderType === 'delivery') title = `🚚 Delivery: ${currentOrder.customerName}`;
    else title = `🍽️ Table ${currentOrder.table}`;

    let itemsHtml = currentOrder.items.map(item => 
        `<div style="font-size:1.8rem; margin:5px 0;">${item.quantity}x ${item.name}</div>`
    ).join('');

    popupOrderDetails.innerHTML = `
        <h2 style="color:var(--gold); margin:10px 0;">${title}</h2>
        <div style="text-align:left; display:inline-block;">${itemsHtml}</div>
        ${currentOrder.notes ? `<p style="color:#ff8888; font-size:1.2rem;">⚠️ ${currentOrder.notes}</p>` : ''}
    `;
    
    newOrderPopup.classList.remove('hidden');
}

acceptOrderBtn.onclick = () => {
    if (newOrderQueue.length > 0) {
        const orderToAccept = newOrderQueue.shift(); 
        db.collection("orders").doc(orderToAccept.id).update({ status: "seen" });
        processNewOrderQueue();
    }
};

// --- ACTIONS ---
window.handleServe = function(orderId) {
    const order = allOrders[orderId];
    // Toggle status
    const newStatus = (order.status === 'ready' || order.status === 'cooked') ? 'seen' : 'ready';
    db.collection("orders").doc(orderId).update({ status: newStatus });
}

// --- MASTER CLEAR FUNCTION ---
async function handleMasterClear() {
    if(!confirm("⚠️ WARNING: DELETE ALL ORDERS?\n\nThis will clear the screen for a new day.")) {
        return;
    }

    const pwd = prompt("Confirm Password:");
    if (pwd !== KITCHEN_PASSWORD) {
        alert("Wrong password.");
        return;
    }

    try {
        const snapshot = await db.collection("orders").get();
        const batch = db.batch();
        snapshot.docs.forEach(doc => batch.delete(doc.ref));
        await batch.commit();
        alert("✅ Board Cleared!");
        location.reload(); 
    } catch (error) {
        console.error("Error clearing board:", error);
    }
}

// Waiter Call Logic
function showWaiterCall(tableNum, docId) {
    currentWaiterCallId = docId;
    waiterCallTableText.innerText = `TABLE ${tableNum}`;
    waiterCallOverlay.classList.remove('hidden');
    alertAudio.loop = true;
    alertAudio.play().catch(e => console.log(e));
}

dismissWaiterBtn.addEventListener('click', () => {
    alertAudio.loop = false;
    alertAudio.pause();
    alertAudio.currentTime = 0;
    if(currentWaiterCallId) {
        db.collection("orders").doc(currentWaiterCallId).delete();
        waiterCallOverlay.classList.add('hidden');
    }
});

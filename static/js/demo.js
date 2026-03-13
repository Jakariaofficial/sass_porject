// ডেমো ডাটা অবজেক্ট
const demoContents = {
    analytics: `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fadeIn">
            <div class="bg-gray-700 p-6 rounded-xl border border-gray-600"><p class="text-gray-400">Revenue</p><h4 class="text-3xl font-bold mt-2">৳ ৮৫,৫০০</h4></div>
            <div class="bg-gray-700 p-6 rounded-xl border border-gray-600"><p class="text-gray-400">Users</p><h4 class="text-3xl font-bold mt-2">২,১৪০</h4></div>
            <div class="bg-gray-700 p-6 rounded-xl border border-gray-600"><p class="text-gray-400">Growth</p><h4 class="text-3xl font-bold mt-2">+২৫%</h4></div>
        </div>
        <div class="bg-gray-800 p-6 rounded-xl border border-gray-700 animate-fadeIn h-[300px]">
            <h4 class="text-white font-bold mb-4">Monthly Revenue Performance</h4>
            <canvas id="myAnalyticsChart"></canvas>
        </div>
    `,
    tasks: `
        <div class="animate-fadeIn space-y-4">
            <div class="flex gap-2 mb-6">
                <input type="text" id="taskInput" placeholder="নতুন টাস্ক লিখুন..." class="flex-1 p-3 rounded-lg bg-gray-700 text-white border border-gray-600">
                <button onclick="addTask()" class="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold">Add</button>
            </div>
            <div id="taskList" class="space-y-3">
                <div class="bg-gray-700 p-4 rounded-lg flex justify-between border-l-4 border-green-500">
                    <span class="text-white">API Integration</span><span class="text-green-400 text-sm font-bold">Done</span>
                </div>
            </div>
        </div>
    `,
    team: `
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fadeIn">
            ${['Joni', 'Sara', 'Rakib', 'Mina'].map(name => `
                <div class="bg-gray-700 p-4 rounded-xl text-center border border-gray-600">
                    <div class="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center font-bold text-white">${name[0]}</div>
                    <h5 class="text-white font-bold">${name}</h5><p class="text-sm text-gray-400">Member</p>
                </div>
            `).join('')}
        </div>
    `,
    inventory: `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fadeIn">
            <div class="bg-gray-700 p-4 rounded-xl border-l-4 border-red-500"><p class="text-gray-400 text-sm">Low Stock</p><h4 class="text-2xl font-bold text-white">১২ টি</h4></div>
            <div class="bg-gray-700 p-4 rounded-xl border-l-4 border-yellow-500"><p class="text-gray-400 text-sm">Pending</p><h4 class="text-2xl font-bold text-white">৫ টি</h4></div>
            <div class="bg-gray-700 p-4 rounded-xl border-l-4 border-green-500"><p class="text-gray-400 text-sm">Revenue</p><h4 class="text-2xl font-bold text-white">৳ ২,১০,৫০০</h4></div>
        </div>
        <div class="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 animate-fadeIn">
            <table class="w-full text-left">
                <thead class="bg-gray-900 text-gray-300">
                    <tr><th class="p-4">প্রোডাক্ট নাম</th><th class="p-4">ক্যাটাগরি</th><th class="p-4">স্টক</th><th class="p-4">স্ট্যাটাস</th></tr>
                </thead>
                <tbody class="text-gray-300">
                    <tr class="border-b border-gray-700"><td class="p-4">Wireless Mouse</td><td class="p-4">Electronics</td><td class="p-4">৮৫</td><td class="p-4 text-green-500">In Stock</td></tr>
                    <tr class="border-b border-gray-700"><td class="p-4">Gaming Keyboard</td><td class="p-4">Electronics</td><td class="p-4 text-red-500">০৫</td><td class="p-4 text-red-500">Low Stock</td></tr>
                </tbody>
            </table>
        </div>
    `,
    sales: `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fadeIn">
            <div class="bg-gray-700 p-6 rounded-xl border border-gray-600"><p class="text-gray-400">Total Sales</p><h4 class="text-3xl font-bold mt-2">৳ ২,৫০,০০০</h4></div>
            <div class="bg-gray-700 p-6 rounded-xl border border-gray-600"><p class="text-gray-400">Orders</p><h4 class="text-3xl font-bold mt-2">১২০</h4></div>
            <div class="bg-gray-700 p-6 rounded-xl border border-gray-600"><p class="text-gray-400">Returns</p><h4 class="text-3xl font-bold mt-2">৫</h4></div>
        </div>
        <div class="bg-gray-800 p-6 rounded-xl border border-gray-700 animate-fadeIn h-[300px]">
            <h4 class="text-white font-bold mb-4">Monthly Sales</h4>
            <canvas id="salesChart"></canvas>
        </div>
    `,
    feedback: `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn">
            <div class="bg-gray-700 p-6 rounded-xl text-white">
                <p class="italic">"Awesome platform! Helped our team increase productivity."</p>
                <h5 class="mt-4 font-bold">— Joni</h5>
            </div>
            <div class="bg-gray-700 p-6 rounded-xl text-white">
                <p class="italic">"Very intuitive and easy to use dashboard."</p>
                <h5 class="mt-4 font-bold">— Sara</h5>
            </div>
            <div class="bg-gray-700 p-6 rounded-xl text-white">
                <p class="italic">"Saved us hours of manual work every week."</p>
                <h5 class="mt-4 font-bold">— Rakib</h5>
            </div>
        </div>
    `,
    notifications: `
        <div class="space-y-4 animate-fadeIn">
            ${['Order #1024 shipped', 'New user registered', 'Server downtime alert'].map(msg => `
                <div class="bg-gray-700 p-4 rounded-lg flex justify-between border-l-4 border-blue-500">
                    <span class="text-white">${msg}</span>
                    <span class="text-blue-400 text-sm font-bold">New</span>
                </div>
            `).join('')}
        </div>
    `
};

// চার্ট রেন্ডার ফাংশন
function renderChart() {
    const ctx = document.getElementById('myAnalyticsChart')?.getContext('2d');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue (৳)',
                data: [12000, 19000, 3000, 50000, 20000, 85000],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#ffffff' } } } }
    });
}

function renderSalesChart() {
    const ctx = document.getElementById('salesChart')?.getContext('2d');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun'],
            datasets: [{
                label: 'Sales (৳)',
                data: [12000, 25000, 18000, 30000, 22000, 50000],
                backgroundColor: '#10b981'
            }]
        },
        options: { responsive:true, maintainAspectRatio:false, plugins: { legend: { labels: { color: '#ffffff' } } } }
    });
}

// টাস্ক যোগ করার ফাংশন
function addTask() {
    const input = document.getElementById('taskInput');
    if (input.value.trim() !== "") {
        const div = document.createElement('div');
        div.className = "bg-gray-700 p-4 rounded-lg flex justify-between border-l-4 border-blue-500 animate-fadeIn";
        div.innerHTML = `<span class="text-white">${input.value}</span><span class="text-blue-400 text-sm font-bold">New</span>`;
        document.getElementById('taskList').appendChild(div);
        input.value = "";
    }
}

// ডেমো পরিবর্তনের ফাংশন
function changeDemo(type) {
    document.getElementById('demo-content').innerHTML = demoContents[type];
    document.querySelectorAll('.demo-btn').forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white');
        b.classList.add('text-gray-400');
    });
    document.getElementById('btn-' + type).classList.add('bg-blue-600', 'text-white');

    // চার্ট রেন্ডার কল
    if (type === 'analytics') renderChart();
    if (type === 'sales') renderSalesChart();
}

// লাইট/ডার্ক মোড টগল
function toggleDarkMode() {
    const demoSection = document.getElementById('demo');
    const card = document.getElementById('demo-card');
    const btn = document.getElementById('theme-toggle-btn');
    
    demoSection.classList.toggle('light-mode');
    card.classList.toggle('light-mode');
    
    btn.innerText = demoSection.classList.contains('light-mode') ? '🌙 Dark' : '☀️ Light';
}

// ডকুমেন্ট লোড হলে ডিফল্ট
document.addEventListener("DOMContentLoaded", () => changeDemo('analytics'));


// Blog Dashboard Demo Content
const blogDemoContents = {
    overview: `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="bg-blue-500 p-6 rounded-xl text-white">
                <p class="text-sm opacity-90">Published Posts</p>
                <h4 class="text-3xl font-bold mt-2">১২</h4>
            </div>
            <div class="bg-yellow-500 p-6 rounded-xl text-white">
                <p class="text-sm opacity-90">Drafts</p>
                <h4 class="text-3xl font-bold mt-2">৫</h4>
            </div>
            <div class="bg-red-500 p-6 rounded-xl text-white">
                <p class="text-sm opacity-90">Pending Review</p>
                <h4 class="text-3xl font-bold mt-2">৩</h4>
            </div>
        </div>
    `,
    posts: `
        <div class="overflow-x-auto">
            <table class="w-full text-left border border-gray-300 dark:border-gray-700">
                <thead class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                    <tr>
                        <th class="p-3">Title</th>
                        <th class="p-3">Author</th>
                        <th class="p-3">Status</th>
                    </tr>
                </thead>
                <tbody class="text-gray-800 dark:text-gray-300">
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <td class="p-3">How to Learn Tailwind</td>
                        <td class="p-3">Joni</td>
                        <td class="p-3 text-green-600 dark:text-green-400 font-bold">Published</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    authors: `
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            ${['Joni','Sara','Rakib','Mina'].map(name => `
                <div class="bg-gray-200 dark:bg-gray-700 p-4 rounded-xl text-center">
                    <div class="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">${name[0]}</div>
                    <h5 class="font-bold">${name}</h5>
                    <p class="text-sm opacity-80">Author</p>
                </div>
            `).join('')}
        </div>
    `,
    categories: `
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            ${['Web Design','Backend','Marketing','Tutorials'].map(cat => `
                <div class="bg-gray-200 dark:bg-gray-700 p-4 rounded-xl text-center">
                    <h5 class="font-bold">${cat}</h5>
                </div>
            `).join('')}
        </div>
    `
};

function changeBlogDemo(type) {
    document.getElementById('blog-demo-content').innerHTML = blogDemoContents[type];
    document.querySelectorAll('.blog-btn').forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white');
        b.classList.add('text-gray-400');
    });
    document.getElementById('btn-' + type).classList.add('bg-blue-600', 'text-white');
    document.getElementById('btn-' + type).classList.remove('text-gray-400');
}

function toggleBlogDarkMode() {
    const card = document.getElementById('blog-demo-card');
    const btn = document.getElementById('blog-theme-btn');
    
    // কার্ডের ব্যাকগ্রাউন্ড টগল
    card.classList.toggle('bg-gray-900');
    card.classList.toggle('bg-white');
    
    // টেক্সট কালার টগল
    card.classList.toggle('text-white');
    card.classList.toggle('text-gray-900');
    
    btn.innerText = card.classList.contains('bg-gray-900') ? '☀️ Light' : '🌙 Dark';
}

document.addEventListener('DOMContentLoaded', () => changeBlogDemo('overview'));
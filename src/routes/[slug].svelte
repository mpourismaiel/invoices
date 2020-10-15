<script context="module">
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`invoices/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { invoice: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let invoice;
</script>

<div class="invoice grid grid-cols-2 mt-8">
  <div class="grid grid-cols-8 col-start-1 gap-8">
    <div class="col-span-8 flex flex-col mb-4">
      <h3 class="text-gray-600 text-md">From:</h3>
      <p class="text-gray-900 text-2xl font-medium">Mahdi Pourismaiel</p>
      <p class="text-gray-800 text-md font-medium">mpourismaiel@gmail.com</p>
    </div>
    <div class="col-span-5 flex flex-col mb-4">
      <h3 class="text-gray-600 text-md">To:</h3>
      <p class="text-gray-900 text-2xl font-medium">
        {@html invoice.to.replace(/\n/g, '<br />')}
      </p>
    </div>
    <div class="flex flex-col mb-4">
      <h3 class="text-gray-600 text-md">Project:</h3>
      <p class="text-gray-900 text-2xl font-medium">{invoice.project}</p>
    </div>
  </div>
  <div class="grid grid-cols-2 col-start-2">
    <h2
      class="flex items-end justify-end mb-4 text-4xl font-medium col-span-2 text-right">
      <span class="text-gray-600 mr-2">Invoice</span>
      <span class="text-gray-900">{invoice.invoiceNumber}</span>
    </h2>
    <div class="col-span-2 grid grid-cols-4 text-right items-end justify-end">
      <span class="col-span-3 text-gray-600 text-md">Invoice Date:</span>
      <span
        class="text-gray-900 text-md font-medium">{invoice.invoiceDate}</span>
    </div>
    <div class="col-span-2 grid grid-cols-4 text-right">
      <span class="col-span-3 text-gray-600 text-md">Service Date:</span>
      <span
        class="text-gray-900 text-md font-medium">{invoice.serviceDate}</span>
    </div>
  </div>
  <div class="col-span-2 mt-8 grid grid-cols-9 text-white bg-gray-800 rounded">
    <span class="col-span-6 py-4 pl-4 pr-2">Item</span>
    <span class="py-4 px-2">Hours</span>
    <span class="py-4 px-2">Rate</span>
    <span class="py-4 px-2">Amount</span>
  </div>
  {#each invoice.items as item (item.title)}
    <div class="col-span-2 grid grid-cols-9 text-gray-800">
      <span class="col-span-6 py-4 pl-4 pr-2">{item.title}</span>
      <span class="py-4 px-2">{item.hours}</span>
      <span class="py-4 px-2">{item.rate}</span>
      <span class="py-4 px-2">{item.amount}</span>
    </div>
  {/each}
  <div class="col-span-2 mt-4 grid grid-cols-9 text-gray-800">
    <span class="col-span-4 pl-4 pr-2" />
    <span class="px-2" />
    <span
      class="col-span-3 px-2 mr-8 text-gray-600 text-md text-right">Total:</span>
    <span
      class="px-2 space-x-1text-gray-900 text-md font-medium">{invoice.total}</span>
  </div>
  {#if invoice.amountPaid}
    <div class="col-span-2 grid grid-cols-9 text-gray-800">
      <span class="col-span-4 pl-4 pr-2" />
      <span class="px-2" />
      <span class="col-span-3 px-2 mr-8 text-gray-600 text-md text-right">
        Amount Paid:
      </span>
      <span
        class="px-2 space-x-1text-gray-900 text-md font-medium">{invoice.amountPaid}</span>
    </div>
  {/if}
  <div class="col-span-2 grid grid-cols-9 text-gray-800">
    <span class="col-span-4 pl-4 pr-2" />
    <span class="px-2" />
    <span class="col-span-3 px-2 mr-8 text-gray-600 text-md text-right">
      Balance Due:
    </span>
    <span
      class="px-2 space-x-1text-gray-900 text-md font-medium">{invoice.balanceDue}</span>
  </div>
  {#if invoice.notes}
    <div class="col-span-2 mt-6 flex flex-col">
      <span class="text-gray-600 text-md">Notes:</span>
      <p class="text-gray-900 text-md">
        {#each invoice.notes as line}
          {line[0]}
          {#if line[1]}<span class="font-medium">{line[1]}</span>{/if}<br />
        {/each}
      </p>
    </div>
  {/if}
</div>

<style>
  .invoice {
    font-family: 'Baloo 2';
    font-size: 16px;
  }
</style>

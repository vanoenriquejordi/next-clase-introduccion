// ...
export default async function InvoicesTable({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) {
    const invoices = await fetchFilteredInvoices(query, currentPage);
    // ...
  }
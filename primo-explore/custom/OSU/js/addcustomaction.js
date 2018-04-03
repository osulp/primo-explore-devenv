// Add Custom Action

app.component('prmActionListAfter', {
    template: `<custom-action name="open_pnx"
    label="View PNX"
    index=5
    icon="ic_find_in_page_24px"
    icon-set="action"
    link="/primo-explore/fulldisplay?docid={pnx.search.recordid[0]}&vid=OSU&showPnx=true" />`
}); 
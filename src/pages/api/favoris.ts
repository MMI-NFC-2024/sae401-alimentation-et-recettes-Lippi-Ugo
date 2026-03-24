export const prerender = false;

export async function POST({ request, locals }: any) {
    const user = locals.pb.authStore.model;

    if (!user) {
        return new Response(
            JSON.stringify({ error: "Non authentifié" }),
            { status: 401 }
        );
    }

    try {
        const { recetteId, action } = await request.json();

        if (action === "add") {
            // Ajouter aux favoris
            await locals.pb.collection("favoris").create({
                utilisateur_id: user.id,
                recette_id: recetteId,
            });
            return new Response(JSON.stringify({ success: true }), {
                status: 200,
            });
        } else if (action === "remove") {
            // Retirer des favoris
            const existing = await locals.pb.collection("favoris").getFullList({
                filter: `utilisateur_id = "${user.id}" && recette_id = "${recetteId}"`,
            });

            if (existing.length > 0) {
                await locals.pb
                    .collection("favoris")
                    .delete(existing[0].id);
            }

            return new Response(JSON.stringify({ success: true }), {
                status: 200,
            });
        }

        return new Response(JSON.stringify({ error: "Action invalide" }), {
            status: 400,
        });
    } catch (error) {
        console.error("Erreur favoris:", error);
        return new Response(
            JSON.stringify({
                error: error instanceof Error ? error.message : "Erreur serveur",
            }),
            { status: 500 }
        );
    }
}
